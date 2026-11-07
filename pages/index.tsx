import Link from "next/link";
import React from "react";
import Head from "next/head";
import DateFormatter from "../components/date-formatter";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nielreitmann" },
  { label: "TikTok", href: "https://www.tiktok.com/@nielreitmann" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/niel-reitmann/" },
  { label: "Twitter", href: "https://twitter.com/NielReitmann" },
  { label: "GitHub", href: "https://github.com/Niel-Reitmann" },
];

const credibility = [
  {
    name: "Startmate",
    desc: "The epicentre for startup ambition across Australia and New Zealand.",
    logo: "/SmLogo.jpeg",
    href: "https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite",
  },
  {
    name: "Atlassian",
    desc: "Teamwork solutions for high-performing teams.",
    logo: "/Atlassian.png",
    href: "https://community.developer.atlassian.com/t/forge-no-egress-web-triggers-eap-is-now-open-to-participation/88021",
  },
  {
    name: "Lucky Sauna Hats",
    desc: "Everything you need for your hottest hobby.",
    logo: "/LuckyLogo.svg",
    pad: true,
    href: "https://luckysaunahats.com/",
  },
  {
    name: "Hims & Hers",
    desc: "Building a safe, effective and accessible future for medicine.",
    logo: "/HimsLogo.png",
    pad: true,
    href: "https://www.eucalyptus.health/",
  },
];

export default function Home({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>{`Niel Reitmann`}</title>
        <link rel="icon" href="/websitefav.png" />
      </Head>
      <div className="w-full min-h-screen text-gray-500 flex flex-col items-center bg-white">
        <main className="flex flex-col w-full max-w-xl p-5 py-10 sm:py-16 gap-10">
          <section className="flex flex-col gap-5">
            <p className="text-lg text-gray-400">Hey, I&apos;m Niel Reitmann 👋</p>
            <p className="text-2xl sm:text-4xl font-light leading-snug text-black">
              I&apos;m 22 and I haven&apos;t figured it all out. But I know that
              what I&apos;ve learnt in the past few years would have meant a lot
              to me at 18.
            </p>
            <p className="text-xl sm:text-2xl font-light leading-snug">
              This is for people with similar interests a few steps behind. My
              mission is to get more young people excited about their careers
              and what their lives could look like.
            </p>
          </section>

          <div className="flex flex-wrap flex-row gap-3">
            {socials.map((s) => (
              <a key={s.label} className="text-gray-500" href={s.href}>
                <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-5 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                  {s.label}
                </div>
              </a>
            ))}
          </div>

          <section className="flex flex-col gap-4">
            <h2 className="text-sm uppercase tracking-wide text-gray-400">
              Writing
            </h2>
            <ul className="flex flex-col gap-4">
              {allPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="text-xl sm:text-2xl text-black hover:underline"
                  >
                    {post.title}
                  </Link>
                  <div className="text-sm text-gray-400">
                    <DateFormatter dateString={post.date} />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-4 pt-6 border-t border-gray-200">
            <h2 className="text-sm uppercase tracking-wide text-gray-400">
              Where I&apos;ve worked
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credibility.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  className="flex items-center gap-3 text-gray-500 hover:text-black transition duration-100"
                >
                  <img
                    className={`h-[48px] w-[48px] max-w-none border border-gray-300 rounded-xl ${
                      c.pad ? "p-[5px]" : ""
                    }`}
                    src={c.logo}
                    alt={c.name}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-black">{c.name}</span>
                    <span className="text-xs">{c.desc}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400">
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
