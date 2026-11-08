import React, { useState } from "react";

type Status = "idle" | "loading" | "done" | "error" | "invalid";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      if (res.ok) setStatus("done");
      else setStatus(res.status === 400 ? "invalid" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-ink/70">
        Thanks. Check your email to confirm your subscription.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-ink/20 bg-canvas px-5 py-3 text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent"
        />
        {/* Honeypot: hidden from people, tempting to bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-colors duration-150 hover:bg-accent disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {status === "invalid" && (
        <p className="text-sm text-ink/60">That email doesn&apos;t look right.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-ink/60">
          Something went wrong. Try again in a minute.
        </p>
      )}
    </form>
  );
};

export default SubscribeForm;
