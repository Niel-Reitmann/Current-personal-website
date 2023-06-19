import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight sm:mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      .
    </h2>
  );
};

export default Header;
