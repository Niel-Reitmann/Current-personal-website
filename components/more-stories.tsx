import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex justify-center items-center text-black">
      <div className="flex flex-col sm:items-center justify-center sm:w-[50%] h-[100vh] md:gap-x-16 lg:gap-x-32 gap-y-10 sm:gap-y-20 md:gap-y-8 text-black">
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
