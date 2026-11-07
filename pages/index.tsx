import Link from "next/link";
import React from "react";
import Head from "next/head";
import DateFormatter from "../components/date-formatter";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

const FEATURED_SLUG = "WhyIWentBackToUni";

// DRAFT one-liners for Niel to approve or rewrite. Keyed by post slug.
const hooks: Record<string, string> = {
  Someworklearnings:
    "What I'd tell myself before picking a company: look at the people and the function, not just the logo.",
  WhyIWentBackToUni: "Three reasons I went back, and one of them is a visa.",
  HowILandedARoleAtStartmate:
    "From delivering for Domino's on an e-bike to working at Startmate.",
  UsefulnessContextConfidence:
    "What six months in my first full-time job taught me about being useful.",
  WinsStack:
    "What happens when you live up to the version of yourself you hold yourself to, and when you don't.",
  Analternative:
    "A five-step way to test what you might want to do, instead of guessing.",
  "1monthlearnings":
    "What I learnt moving to Sydney on my own at 19 and stepping into tech.",
};

const buttons = [
  { label: "Instagram", href: "https://www.instagram.com/nielreitmann" },
  { label: "TikTok", href: "https://www.tiktok.com/@nielreitmann" },
];

const textLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/niel-reitmann/" },
  { label: "Twitter", href: "https://twitter.com/NielReitmann" },
  { label: "GitHub", href: "https://github.com/Niel-Reitmann" },
];

const credibility = [
  {
    name: "Startmate",
    logo: "/SmLogo.jpeg",
    href: "https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite",
  },
  {
    name: "Atlassian",
    logo: "/Atlassian.png",
    href: "https://community.developer.atlassian.com/t/forge-no-egress-web-triggers-eap-is-now-open-to-participation/88021",
  },
  {
    name: "Lucky Sauna Hats",
    logo: "/LuckyLogo.svg",
    pad: true,
    href: "https://luckysaunahats.com/",
  },
  {
    name: "Hims & Hers",
    logo: "/HimsLogo.png",
    pad: true,
    href: "https://www.eucalyptus.health/",
  },
];

const label =
  "font-mono text-xs uppercase tracking-widest text-ink/50";

export default function Home({ allPosts }: Props) {
  const featured = allPosts.find((p) => p.slug === FEATURED_SLUG);
  const rest = allPosts.filter((p) => p.slug !== FEATURED_SLUG);

  return (
    <>
      <Head>
        <title>{`Niel Reitmann`}</title>
        <link rel="icon" href="/websitefav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap"
        />
      </Head>
      <div className="w-full min-h-screen bg-canvas text-ink font-body flex flex-col items-center">
        <main className="flex flex-col w-full max-w-xl px-5 py-10 sm:py-16 gap-14">
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="/niel.jpg"
                alt="Niel Reitmann"
              />
              <p className="font-heading text-xl font-medium">
                Hi, I&apos;m Niel 👋
              </p>
            </div>
            <p className="font-heading text-[28px] sm:text-4xl font-medium leading-tight tracking-tight">
              I know some things now that I wish I knew when I was younger. I
              have by no means figured it all out, but this is for people with
              similar interests a few steps behind.
            </p>
            <p className="text-lg sm:text-xl leading-snug text-ink/60">
              My mission is to get more young people excited about their
              careers and what their lives could look like.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {buttons.map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-colors duration-150 hover:bg-accent"
                >
                  Follow on {b.label}
                </a>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className={label}>Writing</h2>
            {featured && (
              <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  Start here
                </span>
                <Link
                  as={`/posts/${featured.slug}`}
                  href="/posts/[slug]"
                  className="font-heading text-2xl sm:text-3xl font-medium leading-tight text-ink hover:text-accent transition-colors"
                >
                  {featured.title}
                </Link>
                {hooks[featured.slug] && (
                  <p className="text-ink/60">{hooks[featured.slug]}</p>
                )}
              </div>
            )}
            <ul className="flex flex-col gap-6">
              {rest.map((post) => (
                <li key={post.slug} className="flex flex-col gap-1">
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="font-heading text-xl font-medium leading-snug text-ink hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                  {hooks[post.slug] && (
                    <p className="text-sm text-ink/60">{hooks[post.slug]}</p>
                  )}
                  <span className="font-mono text-xs text-ink/40">
                    <DateFormatter dateString={post.date} />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-5 border-t border-ink/10 pt-8">
            <h2 className={label}>Worked with</h2>
            <div className="flex flex-wrap items-center gap-6">
              {credibility.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  aria-label={c.name}
                  className="group"
                >
                  <img
                    className={`h-12 w-12 max-w-none object-contain mix-blend-multiply opacity-60 grayscale transition duration-150 group-hover:opacity-100 group-hover:grayscale-0 ${
                      c.pad ? "p-[5px]" : ""
                    }`}
                    src={c.logo}
                    alt={c.name}
                  />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-ink/40">
              Studying computer science at UNSW, currently on program leave.
            </p>
          </section>

          <footer className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
            {textLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="!text-ink/60 underline underline-offset-4 decoration-ink/20 hover:!text-accent hover:decoration-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </footer>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
};
