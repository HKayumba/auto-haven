import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect width="100" height="100" rx="12" fill="#0F172A" />
        <path d="M20 65L28 35H46L44 45H58L56 55H42L40 65H20Z" fill="#DC2626" />
        <path
          d="M50 65L58 35H78L76 45H64L63 50H75L73 60H61L60 65H50Z"
          fill="#DC2626"
        />
        <path d="M15 70H85L82 80H12L15 70Z" fill="#DC2626" />
      </svg>
      <div>
        <span className="font-montserrat font-bold text-[var(--auto-haven-blue)] text-xl md:text-2xl">
          AUTO HAVEN
        </span>
        <span className="block font-montserrat text-xs font-medium text-[var(--auto-haven-red)]">
          USA
        </span>
      </div>
    </div>
  );
};

export default Logo;
