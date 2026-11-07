import React from "react";
import Head from "next/head";
import SiteHeader from "../components/site-header";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

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
  return (
    <>
      <Head>
        <title>{`Niel Reitmann`}</title>
        <link rel="icon" href="/websitefav.png" />
      </Head>
      <div className="w-full min-h-screen bg-canvas text-ink font-body flex flex-col items-center">
        <main className="flex flex-col w-full max-w-xl md:max-w-2xl px-5 py-10 sm:py-16 md:py-24 gap-14">
          <section className="flex flex-col gap-8">
            <SiteHeader />
            <div className="flex flex-col gap-5">
              <p className="font-heading text-xl font-medium">Hi, I&apos;m Niel</p>
              <p className="font-heading text-[28px] sm:text-4xl md:text-[44px] font-medium leading-tight tracking-tight">
                I know some things now that I wish I knew when I was younger. I
                have by no means figured it all out, but this is for people with
                similar interests a few steps behind.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl leading-snug text-ink/60">
                My mission is to get more young people excited about their
                careers and what their lives could look like.
              </p>
            </div>
          </section>

          <section id="writing" className="flex flex-col gap-6">
            <h2 className={label}>Writing</h2>
            <MoreStories posts={allPosts} />
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
