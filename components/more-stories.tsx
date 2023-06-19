import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-[50%] h-[100vh] md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
