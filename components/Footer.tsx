import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterIcon from "../img/skull.gif";
import Player from "./Player";

function Footer() {
  return (
    <footer className="footer flex justify-between items-center p-2  h-[7rem] bg-[#44465D] sm:p-5  relative ">
      <div className="flex items-center justify-start text-white">
        <Image src={FooterIcon} width={30} alt="skull" />
        <h2>
          Copyright © {new Date().getFullYear()} - All rights reserved. Icons by{" "}
          {""}
          <Link
            href={process.env.ICONS_URL}
            target="_blank"
            className="underline"
          >
            Icons8
          </Link>
        </h2>
      </div>
      <Player />
      <div className="flex space-x-3 pr-2">
        <Link href={process.env.GIT_URL} target="_blank">
          <FaGithub className="text-white text-2xl" />
        </Link>

        <Link href={process.env.INSTA_URL} target="_blank">
          <FaInstagram className="text-white text-2xl" />
        </Link>
        <Link href={process.env.LINKEDIN_URL} target="_blank">
          <FaLinkedin className="text-white text-2xl" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
