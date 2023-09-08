import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight sm:mb-20 mt-8">
      <Link href="/blogpage" className="hover:underline text-black">
        Back
      </Link>
    </h2>
  );
};

export default Header;
