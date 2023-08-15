import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import BlogHeader from "../components/blogheader";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>{`Niel Reitmann`}</title>
        </Head>
        <Container>
          <BlogHeader />
          <MoreStories posts={morePosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
};
