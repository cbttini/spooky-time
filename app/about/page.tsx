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
    <main className="h-[100%] gradient">
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
              expect? But less about that, and more about me. This website?
              Yeah, mine. Those riddles you'd see if you mosey on over to the
              top of your screen and tap/click on "Riddles". Yep, also mine.
              Those icons and illustrations? Nuh-uh not mine. Found those from a
              website called{" "}
              <a
                href={process.env.ICONS_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
                Icons8
              </a>{" "}
              or whatever. But anyways, less about that and even more about me.
              You can check out my{" "}
              <a
                href={process.env.GIT_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
                GitHub
              </a>
              . Though as it stands, the only thing on there is this website so.
              But also heres my{" "}
              <a
                href={process.env.INSTA_URL}
                className="text-[#c64e3d]"
                target="_blank"
              >
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
              . And thats about it. Happy Spooky Times!
            </p>
          </div>
          <Image src={mail} quality={100} alt="mail" />
        </div>
      </div>
    </main>
  );
}
