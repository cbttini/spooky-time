"use client";
import Image from "next/image";
import { Creepster } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../img/logo.png";
import background from "../img/background.png";
import NavHamburger from "../components/NavHamburger";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-between text-white shadow-lg backdrop-blur items-center h-[8rem] md:h-[12rem] p-2 md:px-10 ">
        <Image
          alt="Halloween"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[-1] flex items-center " />
        <div className="flex-1">
          <Link href="/">
            <Image src={logo} alt="logo" width={60} quality={100} />
          </Link>
        </div>
        <div className="flex-2">
          <Link href="/">
            <h1
              className={`${creepster.variable} font-sans text-shadow-black text-[1.5rem] sm:text-[2rem]  lg:text-[2.5rem]`}
            >
              Is it spooky time yet?
            </h1>
          </Link>
        </div>

        <div className="flex flex-1 justify-end ">
          <NavHamburger />
          <ul className="hidden lg:flex lg:items-center space-x-1   ">
            <Link href="/riddles">
              <li
                className={`btn btn-ghost btn-sm rounded-btn text-[1rem] ${
                  pathname === `/riddles` ? `text-[#c64e3d]` : `text-white`
                }`}
              >
                Riddles
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`btn btn-ghost btn-sm rounded-btn text-[1rem] ${
                  pathname === `/about` ? `text-[#c64e3d]` : `text-white`
                }`}
              >
                About
              </li>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_SPIRIT_URL}`}
              target="_blank"
            >
              <li className="btn text-white btn-outline btn-ghost btn-md rounded-3xl ml-1 text-[1rem]">
                Shop Spirit
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
