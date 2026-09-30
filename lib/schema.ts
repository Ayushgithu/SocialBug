import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("Enter a valid work email."),
  phone: z.string().optional().or(z.literal("")),
  company: z.string().min(2, "Company name is required."),
  website: z.string().optional().or(z.literal("")),
  stage: z.enum(
    ["Idea", "Pre-launch", "Early stage", "Growth stage", "Scaling", "Others"],
    { message: "Select a company stage." }
  ),
  helpWith: z.enum(
    [
      "Influencer Campaigns",
      "Product Hunt Launch",
      "SaaS Growth Campaign",
      "Content & Creative",
      "Full Managed Campaign",
      "Others",
    ],
    { message: "Let us know what you need help with." }
  ),
  budget: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  // Honeypot: real visitors never see or fill this field (visually hidden).
  // Any bot that blindly fills every input trips it; we accept the
  // request but silently drop it instead of sending real emails.
  companyWebsiteConfirm: z.string().optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;