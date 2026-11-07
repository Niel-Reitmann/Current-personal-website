import Link from "next/link";
import { socials } from "../lib/socials";

const SiteHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" aria-label="Home">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src="/niel.jpg"
          alt="Niel Reitmann"
        />
      </Link>
      <div className="flex items-center -mr-2.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="p-2.5 !text-ink/70 transition-colors duration-150 hover:!text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px] fill-current"
              aria-hidden="true"
            >
              <path d={s.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SiteHeader;
