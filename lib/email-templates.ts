import type { ContactFormValues } from "@/lib/schema";
import { CLD } from "@/lib/cloudinary";
import { business } from "@/lib/business";

const SITE_URL = "https://socialbugmedia.in";
const LOGO_URL = CLD.logo.iconDark;
const INSTAGRAM_URL = "https://www.instagram.com/shivam_chhirolya_97/";
const LINKEDIN_URL = "https://www.linkedin.com/company/socialbugmedia/";

const baseStyles = `
  body { margin:0; padding:0; background:#050505; font-family: 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing:antialiased; }
  table { border-collapse:collapse; }
  a { text-decoration:none; }
  .wrapper { width:100%; background:#050505; padding:48px 16px; }
  .outer {
    max-width:580px;
    margin:0 auto;
  }
  .accent-bar { height:5px; border-radius:999px 999px 0 0; background:linear-gradient(90deg,#f2611f,#fc842e,#ffa45c); }
  .card {
    background:linear-gradient(165deg,#141414,#0c0c0c 60%);
    border:1px solid rgba(255,255,255,0.08);
    border-top:none;
    border-radius:0 0 24px 24px;
    padding:44px 40px;
  }
  .logo-badge {
    display:inline-block;
    width:56px;
    height:56px;
    text-align:center;
    line-height:56px;
    mso-line-height-rule:exactly;
  }
  .logo-badge img { width:52px; height:52px; vertical-align:middle; }
  .wordmark { font-size:16px; font-weight:700; color:#f7f6f3; letter-spacing:0.2px; }
  .wordmark span { color:#ffa45c; }
  .eyebrow { font-size:11px; letter-spacing:3px; text-transform:uppercase; color:#ffa45c; margin:32px 0 14px; font-weight:700; }
  .headline { font-size:30px; line-height:1.18; color:#f7f6f3; margin:0 0 20px; font-weight:700; letter-spacing:-0.3px; }
  .body-text { font-size:15px; line-height:1.75; color:rgba(247,246,243,0.68); margin:0 0 16px; }
  .badge {
    display:inline-block;
    padding:9px 18px;
    border-radius:999px;
    background:rgba(255,164,92,0.12);
    border:1px solid rgba(255,164,92,0.3);
    color:#ffa45c;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-top:10px;
  }
  .cta-button {
    display:inline-block;
    margin-top:26px;
    padding:14px 28px;
    border-radius:999px;
    background:linear-gradient(90deg,#f2611f,#fc842e,#ffa45c);
    color:#0a0a0a !important;
    font-size:13px;
    font-weight:700;
    letter-spacing:0.3px;
  }
  .divider { height:1px; background:rgba(255,255,255,0.08); margin:32px 0 28px; border:none; }
  .footer-text { font-size:12px; line-height:1.7; color:rgba(247,246,243,0.38); margin-top:4px; }
  .strategy-line { font-size:11px; letter-spacing:3px; text-transform:uppercase; margin:0 0 22px; font-weight:700; }
  .strategy-line span.s1 { color:#ef2f7a; }
  .strategy-line span.s2 { color:#fc842e; }
  .strategy-line span.s3 { color:#a855f7; }
  .row { padding:13px 0; border-bottom:1px solid rgba(255,255,255,0.07); }
  .row-label { font-size:10.5px; text-transform:uppercase; letter-spacing:1.5px; color:rgba(247,246,243,0.4); margin:0 0 5px; font-weight:600; }
  .row-value { font-size:14.5px; color:#f7f6f3; margin:0; line-height:1.5; }
  .social-badge {
    display:inline-block;
    width:34px;
    height:34px;
    border-radius:999px;
    background:rgba(255,255,255,0.06);
    border:1px solid rgba(255,255,255,0.12);
    color:#f7f6f3 !important;
    font-size:11px;
    font-weight:700;
    text-align:center;
    line-height:34px;
    mso-line-height-rule:exactly;
    margin-right:8px;
  }
  .footer-outer { text-align:center; padding:28px 12px 0; }
`;

function shell(bodyHtml: string) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="dark" />
    <title>SocialBug Media</title>
    <style>${baseStyles}</style>
  </head>
  <body>
    <div class="wrapper">
      <table class="outer" width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr><td class="accent-bar">&nbsp;</td></tr>
        <tr>
          <td class="card">
            <table cellPadding="0" cellSpacing="0" role="presentation">
              <tr>
                <td class="logo-badge">
                  <img src="${LOGO_URL}" alt="SocialBug Media" />
                </td>
                <td style="padding-left:14px;">
                  <span class="wordmark">SocialBug <span>Media</span></span>
                </td>
              </tr>
            </table>

            ${bodyHtml}

            <hr class="divider" />
            <p class="strategy-line"><span class="s1">Strategy.</span> <span class="s2">Content.</span> <span class="s3">Growth.</span></p>

            <table cellPadding="0" cellSpacing="0" role="presentation">
              <tr>
                <td>
                  <a class="social-badge" href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">IG</a>
                </td>
                <td>
                  <a class="social-badge" href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">in</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div class="footer-outer">
        <p class="footer-text">
          SocialBug Media &middot; <a href="${SITE_URL}" style="color:rgba(247,246,243,0.5);">socialbugmedia.in</a>
        </p>
        <p class="footer-text">GSTIN: ${business.gstin}</p>
        <p class="footer-text">This is a transactional email sent because you contacted us.</p>
      </div>
    </div>
  </body>
</html>`;
}

function firstNameOf(name: string) {
  return name.split(" ")[0];
}

export function confirmationEmail(values: ContactFormValues) {
  const firstName = firstNameOf(values.name);
  const body = `
        <p class="eyebrow">Message received</p>
        <h1 class="headline">We got the signal. &#128027;</h1>
        <p class="body-text">Hey ${firstName},</p>
        <p class="body-text">
          Thanks for reaching out to SocialBug Media. We've received your
          details and our team is already buzzing.
        </p>
        <p class="body-text">
          We'll review your project and get back to you within one business
          day. In the meantime, keep building.
        </p>
        <span class="badge">MESSAGE RECEIVED &#10003;</span>
        <br />
        <a class="cta-button" href="${SITE_URL}" target="_blank" rel="noopener noreferrer">Explore our work &rarr;</a>
  `;
  return shell(body);
}

export function internalNotificationEmail(values: ContactFormValues) {
  const rows: Array<[string, string]> = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company],
    ["Website", values.website || "-"],
    ["Company Stage", values.stage],
    ["Help With", values.helpWith],
    ["Budget", values.budget || "Not specified"],
  ];

  const body = `
        <p class="eyebrow">New Lead</p>
        <h1 class="headline">&#128027; New lead &mdash; ${values.company}</h1>
        <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
          ${rows
            .map(
              ([label, value]) => `
          <tr>
            <td class="row">
              <p class="row-label">${label}</p>
              <p class="row-value">${value}</p>
            </td>
          </tr>`
            )
            .join("")}
          <tr>
            <td style="padding:13px 0;">
              <p class="row-label">Project Details</p>
              <p class="row-value">${values.message}</p>
            </td>
          </tr>
        </table>
        <a class="cta-button" href="mailto:${values.email}" target="_blank" rel="noopener noreferrer">Reply to ${firstNameOf(values.name)} &rarr;</a>
  `;
  return shell(body);
}