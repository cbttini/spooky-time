import { Creepster } from "next/font/google";
import RiddleCard from "@/components/RiddleCard";
import riddles from "../data/riddles";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

export default function Riddles() {
  return (
    <main className="min-h-screen gradient">
      <div className="max-w-[95rem] m-auto pt-8 pb-[10rem] px-3 lg:text-center ">
        <div className="pb-4">
          <h2
            className={` ${creepster.variable} font-sans text-shadow-orange text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl `}
          >
            Spooky Riddles
          </h2>
          <h3 className="pt-4 text-white md:text-lg lg:text-2xl  lg:pt-6 lg:pb-2">
            Riddles for thee if you care to be in a state of the upmost
            perplexity!
          </h3>
        </div>
        <div className="w-[100%] py-10 rounded-xl bg-[#3d4558] flex gap-10 flex-wrap lg:px-4">
          {riddles.map((riddle) => (
            <RiddleCard
              key={riddle.id}
              title={riddle.title}
              answer={riddle.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
