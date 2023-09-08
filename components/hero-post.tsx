import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const HeroPost = ({ title, date, slug }: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 text-black">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight text-black">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline text-black"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
