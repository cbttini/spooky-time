import { Creepster } from "next/font/google";
import Image from "next/image";
import mail from "./img/mail.png";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

export default function About() {
  return (
    <main className="min-h-screen gradient">
      <div className="max-w-[95rem] m-auto pt-8 pb-[10rem] px-3 lg:text-center ">
        <div className="pb-8">
          <h2
            className={` ${creepster.variable} font-sans text-shadow-orange text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl `}
          >
            About
          </h2>
        </div>
        <div className="w-[100%] py-10 rounded-xl bg-[#3d4558] flex gap-10 flex-col justify-center items-center lg:px-4">
          <div className=" bg-black/70 max-w-[90%] m-auto shadow-xl rounded-3xl">
            <p className="text-white text-lg text-left p-4 indent-5 leading-relaxed md:text-2xl md:indent-10 md:p-10 md:leading-relaxed">
              It's just a Halloween count down timer. Truly, what more did you
              expect? Heres my{" "}
              <a
                href={process.env.GIT_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
                Github
              </a>
              ,
              <a
                href={process.env.INSTA_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
                {" "}
                Instagram
              </a>{" "}
              and my{" "}
              <a
                href={process.env.LINKEDIN_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
          <Image src={mail} quality={100} alt="mail" />
        </div>
      </div>
    </main>
  );
}
