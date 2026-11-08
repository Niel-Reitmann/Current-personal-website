// Plain ES module so both the Next.js API routes and scripts/send-post.mjs can use it.
// DRAFT COPY: Niel to review and rewrite the wording before anything is sent.

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const wrap = (inner) => `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FAF9F6;font-family:Inter,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#15171C;">
<div style="max-width:520px;margin:0 auto;font-size:16px;line-height:1.55;">
${inner}
</div></body></html>`;

const button = (href, label) =>
  `<p style="margin:24px 0;"><a href="${esc(href)}" style="display:inline-block;background:#15171C;color:#FAF9F6;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:500;">${esc(label)}</a></p>`;

export function confirmationEmail({ url }) {
  return {
    subject: "Confirm your subscription",
    text: `Hey there,

You asked to get new posts from me by email. Confirm it's you here:
${url}

If you didn't sign up, ignore this and nothing happens.

Niel`,
    html: wrap(`<p>Hey there,</p>
<p>You asked to get new posts from me by email. Confirm it's you:</p>
${button(url, "Confirm subscription")}
<p style="color:#15171C99;font-size:14px;">If you didn't sign up, ignore this and nothing happens.</p>
<p>Niel</p>`),
  };
}

export function postEmail({ title, note, postUrl, unsubscribeUrl }) {
  const noteText = note ? `${note}\n\n` : "";
  return {
    subject: title,
    text: `${noteText}Read it: ${postUrl}

Niel

--
You're getting this because you subscribed at nielreitmann.com. Niel Reitmann, Sydney, Australia.
Unsubscribe: ${unsubscribeUrl}`,
    html: wrap(`<p style="font-size:22px;font-weight:600;line-height:1.3;margin:0 0 12px;">${esc(title)}</p>
${note ? `<p>${esc(note)}</p>` : ""}
${button(postUrl, "Read it")}
<p>Niel</p>
<hr style="border:none;border-top:1px solid #15171C1A;margin:32px 0 16px;">
<p style="color:#15171C80;font-size:13px;">You're getting this because you subscribed at nielreitmann.com. Niel Reitmann, Sydney, Australia.<br><a href="${esc(unsubscribeUrl)}" style="color:#15171C80;">Unsubscribe</a></p>`),
  };
}
