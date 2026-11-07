import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
  hook?: string;
};

const PostPreview = ({ title, date, slug, hook }: Props) => {
  return (
    <li className="flex flex-col gap-1">
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="font-heading text-xl font-medium leading-snug text-ink hover:text-accent transition-colors"
      >
        {title}
      </Link>
      {hook && <p className="text-sm text-ink/60">{hook}</p>}
      <span className="font-mono text-xs text-ink/40">
        <DateFormatter dateString={date} />
      </span>
    </li>
  );
};

export default PostPreview;
