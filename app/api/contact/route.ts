import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { confirmationEmail, internalNotificationEmail } from "@/lib/email-templates";

// Update these once you have a verified domain in Resend.
<<<<<<< HEAD
const FROM_ADDRESS = "SocialBug Media <hello@socialbugmedia.in>";
const TEAM_INBOX = process.env.CONTACT_TEAM_EMAIL || "shivam@socialbugmedia.in";
=======
const FROM_ADDRESS = "SocialBug Media <hello@socialbugmedia.com>";
const TEAM_INBOX = process.env.CONTACT_TEAM_EMAIL || "team@socialbugmedia.com";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const values = parsed.data;

<<<<<<< HEAD
  // Honeypot tripped — a bot filled the hidden field. Pretend success so
  // it doesn't retry, but never send real emails.
  if (values.companyWebsiteConfirm) {
    return NextResponse.json({ success: true });
  }

=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY is not set. Add it to your environment to send real emails."
    );
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: TEAM_INBOX,
<<<<<<< HEAD
        subject: `🐞 New SocialBug Lead, ${values.company}`,
=======
        subject: `🐞 New SocialBug Lead — ${values.company}`,
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        html: internalNotificationEmail(values),
        replyTo: values.email,
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: values.email,
        subject: "We got the signal. 🐞",
        html: confirmationEmail(values),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502 }
    );
  }
}
