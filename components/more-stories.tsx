import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { hooks } from "../lib/post-hooks";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          hook={hooks[post.slug]}
        />
      ))}
    </ul>
  );
};

export default MoreStories;
