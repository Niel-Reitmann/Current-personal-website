import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
  hook?: string;
  number: number;
};

const PostPreview = ({ title, date, slug, hook, number }: Props) => {
  return (
    <li className="border-t border-ink/10 last:border-b">
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="group grid grid-cols-[2.25rem_1fr_auto] gap-x-2 py-5 text-ink"
      >
        <span className="font-mono text-xs text-ink/40 pt-[0.4rem] md:pt-[0.55rem]">
          {String(number).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-1">
          <span className="font-heading text-xl md:text-2xl font-medium leading-snug group-hover:text-accent transition-colors">
            {title}
          </span>
          {hook && <p className="text-sm md:text-base text-ink/60">{hook}</p>}
          <span className="font-mono text-xs text-ink/40">
            <DateFormatter dateString={date} />
          </span>
        </div>
        <span
          aria-hidden="true"
          className="pt-1 text-accent opacity-40 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition duration-150"
        >
          →
        </span>
      </Link>
    </li>
  );
};

export default PostPreview;
