import Link from "next/link";

const BlogHeader = () => {
  return (
    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
      <Link href="/" className="hover:underline text-black">
        Back
      </Link>
    </h2>
  );
};

export default BlogHeader;
