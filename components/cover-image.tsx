import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  slug?: string;
};

const CoverImage = ({ title, slug }: Props) => {
  const imagePath = "/assets/CoverImage.jpg"; // Path to the image in the public directory

  const image = (
    <img
      src={imagePath}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
