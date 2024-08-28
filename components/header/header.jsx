import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex header justify-between py-5 fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between w-full container">
        <Link href={"/"}>
          <h1 className="font-semibold text-xl text-black">SHRIKANTH</h1>
        </Link>
        <nav>
          <ul className="flex gap-x-8 text-black font-medium text-base">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/register"}>
              <li>Register</li>
            </Link>
            <Link href={"/"}>
              <li>Brawl (Gold player | PLAT BOOSTED)</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
