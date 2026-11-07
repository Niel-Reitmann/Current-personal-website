import Layout from "../components/layout";
import SiteHeader from "../components/site-header";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout path="/blog">
      <Head>
        <link rel="icon" href="/websitefav.png" />
        <title>{`Niel Reitmann`}</title>
      </Head>
      <SiteHeader />
      <MoreStories posts={allPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
};
