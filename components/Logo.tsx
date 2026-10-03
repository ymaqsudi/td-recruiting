import Link from "next/link";

const Logo = ({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) => {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="TD Recruiting home"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold text-navy font-display font-bold text-sm tracking-tight shrink-0 transition-all duration-300 group-hover:bg-gold-light group-hover:-rotate-3 group-hover:scale-105">
        TD
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-base tracking-wide uppercase ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          TD Recruiting
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold mt-0.5">
          A Talent Practice
        </span>
      </span>
    </Link>
  );
};

export default Logo;
