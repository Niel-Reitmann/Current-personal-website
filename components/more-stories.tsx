import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { hooks } from "../lib/post-hooks";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col">
      {posts.map((post, i) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          hook={hooks[post.slug]}
          number={posts.length - i}
        />
      ))}
    </ul>
  );
};

export default MoreStories;
