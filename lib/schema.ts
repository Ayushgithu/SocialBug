import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("Enter a valid work email."),
  company: z.string().min(2, "Company name is required."),
  website: z.string().optional().or(z.literal("")),
  stage: z.enum(["Idea", "Pre-launch", "Early stage", "Growth stage", "Scaling"], {
    message: "Select a company stage.",
  }),
  helpWith: z.enum(
    [
      "Influencer Campaigns",
      "Product Hunt Launch",
      "SaaS Growth Campaign",
      "Content & Creative",
      "Full Managed Campaign",
      "Something else",
    ],
    { message: "Let us know what you need help with." }
  ),
  budget: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Give us a little more detail (10+ characters)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
