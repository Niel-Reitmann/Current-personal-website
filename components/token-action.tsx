import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "./layout";
import SiteHeader from "./site-header";

type Props = {
  title: string;
  prompt: string; // shown before the button
  button: string;
  endpoint: string; // API route to POST the token to
  doneTitle: string;
  doneText: string;
  path: string;
};

type Status = "idle" | "loading" | "done" | "invalid" | "error";

// A page with one button that POSTs the ?token= from the link to an API route.
// Loading the page changes nothing; only the click does.
const TokenAction = ({ title, prompt, button, endpoint, doneTitle, doneText, path }: Props) => {
  const router = useRouter();
  const token = typeof router.query.token === "string" ? router.query.token : "";
  const [status, setStatus] = useState<Status>("idle");

  async function onClick() {
    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (res.ok) setStatus("done");
      else setStatus(res.status === 400 || res.status === 404 ? "invalid" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Layout title={title} path={path}>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{title}</title>
      </Head>
      <SiteHeader />
      <div className="flex flex-col gap-5">
        {status === "done" ? (
          <>
            <h1 className="font-heading text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              {doneTitle}
            </h1>
            <p className="text-lg text-ink/70">{doneText}</p>
          </>
        ) : (
          <>
            <h1 className="font-heading text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-lg text-ink/70">{prompt}</p>
            <div>
              <button
                onClick={onClick}
                disabled={!token || status === "loading"}
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-colors duration-150 hover:bg-accent disabled:opacity-60"
              >
                {status === "loading" ? "Working…" : button}
              </button>
            </div>
            {(status === "invalid" || (router.isReady && !token)) && (
              <p className="text-sm text-ink/60">
                That link isn&apos;t valid. It may be old or incomplete.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-ink/60">
                Something went wrong. Try again in a minute.
              </p>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default TokenAction;
