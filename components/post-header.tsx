import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <header className="flex flex-col gap-3 mb-8">
      <PostTitle>{title}</PostTitle>
      <span className="font-mono text-xs text-ink/40">
        <DateFormatter dateString={date} />
      </span>
    </header>
  );
};

export default PostHeader;
