import type { ContactFormValues } from "@/lib/schema";

const LOGO_URL = "https://socialbugmedia.com/logo/socialbug-icon.png";

const baseStyles = `
  body { margin:0; padding:0; background:#050506; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .wrapper { width:100%; background:#050506; padding:40px 0; }
  .card { max-width:560px; margin:0 auto; background:linear-gradient(160deg,#0b0b0e,#101013); border-radius:24px; padding:40px; border:1px solid rgba(255,255,255,0.08); }
  .logo { width:56px; height:56px; margin-bottom:24px; }
  .eyebrow { font-size:11px; letter-spacing:3px; text-transform:uppercase; color:#c6ff3d; margin:0 0 12px; }
  .headline { font-size:28px; line-height:1.15; color:#f7f6f3; margin:0 0 20px; font-weight:700; }
  .body-text { font-size:15px; line-height:1.7; color:rgba(247,246,243,0.7); margin:0 0 16px; }
  .badge { display:inline-block; padding:8px 16px; border-radius:999px; background:rgba(198,255,61,0.12); color:#c6ff3d; font-size:12px; font-weight:600; letter-spacing:1px; margin-top:8px; }
  .divider { height:1px; background:rgba(255,255,255,0.08); margin:28px 0; border:none; }
  .footer-text { font-size:12px; color:rgba(247,246,243,0.35); margin-top:24px; }
  .strategy-line { font-size:12px; letter-spacing:3px; text-transform:uppercase; background:linear-gradient(90deg,#ff3d9a,#ff5a1f,#c6ff3d); -webkit-background-clip:text; background-clip:text; color:transparent; margin:24px 0 0; font-weight:700; }
  .row { padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
  .row-label { font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:rgba(247,246,243,0.4); margin:0 0 4px; }
  .row-value { font-size:14px; color:#f7f6f3; margin:0; }
`;

export function confirmationEmail(values: ContactFormValues) {
  const firstName = values.name.split(" ")[0];
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${baseStyles}</style>
  </head>
  <body>
    <div class="wrapper">
      <div class="card">
        <img src="${LOGO_URL}" alt="SocialBug Media" class="logo" />
        <p class="eyebrow">Message received</p>
        <h1 class="headline">We got the signal. 🐞</h1>
        <p class="body-text">Hey ${firstName},</p>
        <p class="body-text">
          Thanks for reaching out to SocialBug Media. We've received your
          details and our team is already buzzing.
        </p>
        <p class="body-text">
          We'll review your project and get back to you shortly. In the
          meantime, keep building.
        </p>
        <span class="badge">MESSAGE RECEIVED ✓</span>
        <hr class="divider" />
        <p class="strategy-line">Strategy. Content. Growth.</p>
        <p class="footer-text">
          — SocialBug Media · <a href="https://socialbugmedia.com" style="color:rgba(247,246,243,0.5);">socialbugmedia.com</a>
        </p>
      </div>
    </div>
  </body>
</html>`;
}

export function internalNotificationEmail(values: ContactFormValues) {
  const rows: Array<[string, string]> = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company],
    ["Website", values.website || "—"],
    ["Company Stage", values.stage],
    ["Help With", values.helpWith],
    ["Budget", values.budget || "Not specified"],
  ];

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${baseStyles}</style>
  </head>
  <body>
    <div class="wrapper">
      <div class="card">
        <img src="${LOGO_URL}" alt="SocialBug Media" class="logo" />
        <p class="eyebrow">New Lead</p>
        <h1 class="headline">🐞 New SocialBug Lead — ${values.company}</h1>
        ${rows
          .map(
            ([label, value]) => `
        <div class="row">
          <p class="row-label">${label}</p>
          <p class="row-value">${value}</p>
        </div>`
          )
          .join("")}
        <div class="row" style="border-bottom:none;">
          <p class="row-label">Project Details</p>
          <p class="row-value">${values.message}</p>
        </div>
        <hr class="divider" />
        <p class="footer-text">Sent from the SocialBug Media contact form.</p>
      </div>
    </div>
  </body>
</html>`;
}
