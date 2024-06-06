"use client";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNax";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" alt="Logo" width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          XOOM
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk - User Management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
