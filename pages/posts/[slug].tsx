import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import PostBody from "../../components/post-body";
import SiteHeader from "../../components/site-header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import { hooks } from "../../lib/post-hooks";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout
      preview={preview}
      title={title}
      description={hooks[post.slug]}
      path={`/posts/${post.slug}`}
      type="article"
    >
      <SiteHeader />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className="mb-12">
          <Head>
            <title>{title}</title>
          </Head>
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={post.content} />
        </article>
      )}
      <Link
        href="/#writing"
        className="font-mono text-xs uppercase tracking-widest !text-ink/50 hover:!text-accent transition-colors"
      >
        ← All writing
      </Link>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
