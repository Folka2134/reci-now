import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-6 lg:px-36">
        <Link href="/" className="w-36">
          <Image
            src={"/assets/Reci_Now_green.png"}
            alt="logo"
            width={140}
            height={140}
          />
        </Link>

        {/* <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn> */}

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* <MobileNav /> */}
          </SignedIn>
          <SignedOut>
            <button className="rounded-full">
              <Link href="/sign-in">Login</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
