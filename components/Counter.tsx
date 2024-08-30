"use client";

import { useState, useEffect, use } from "react";
import { Creepster } from "next/font/google";
import CounterTitle from "./CounterTitle";
import CounterImage from "./CounterImage";
import dayjs from "dayjs";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

function Counter() {
  const currentYear = dayjs().year().toString();
  const difference = dayjs(`${currentYear}-10-31`).diff(dayjs(), "second");
  const daysUntil = dayjs(`${currentYear}-10-31`).diff(dayjs(), "day");

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(difference);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return (
    <>
      <div className="flex items-center flex-row justify-center flex-wrap  max-w-[95rem] m-auto sm:px-4 flex-col lg:flex-nowrap md:flex-row">
        <div className="flex flex-1 flex-col items-center text-shadow-black mt-8 md:mt-10 xl:pr-10 xl:mt-0  ">
          <CounterTitle time={daysUntil} />
          <div
            className={` ${creepster.variable} font-sans grid bg-black/50 rounded-3xl grid-flow-col gap-3 text-center auto-cols-max mt-4 p-6 sm:gap-5 sm:p-8 lg:gap-7 xl:p-12 `}
          >
            <div className="flex flex-col text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="countdown text-7xl sm:text-8xl xl:text-9xl">
                <span style={{ "--value": `${d}` }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl ">
              <span className="countdown  text-7xl sm:text-8xl xl:text-9xl">
                <span style={{ "--value": `${h}` }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="countdown  text-7xl sm:text-8xl xl:text-9xl">
                <span style={{ "--value": `${m}` }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="countdown   text-7xl sm:text-8xl xl:text-9xl">
                <span style={{ "--value": `${s}` }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center ">
          <CounterImage time={daysUntil} />
        </div>
      </div>
    </>
  );
}

export default Counter;

// suppressHydrationWarning={true}

{
  /* <div
className={`${creepster.variable} font-sans p-4 grid grid-flow-col gap-5 text-center auto-cols-max`}
>
<div className="flex flex-col p-2 outline rounded-box text-white">
  <span className="countdown  text-8xl">
    <span style={{ "--value": `${d}` }}></span>
  </span>
  days
</div>
<div className="flex flex-col p-2 outline rounded-box text-white">
  <span className="countdown text-8xl">
    <span style={{ "--value": `${h}` }}></span>
  </span>
  hours
</div>
<div className="flex flex-col p-2 outline rounded-box text-white">
  <span className="countdown  text-8xl">
    <span style={{ "--value": `${m}` }}></span>
  </span>
  min
</div>
<div className="flex flex-col p-2 outline rounded-box text-white">
  <span className="countdown  text-8xl">
    <span style={{ "--value": `${s}` }}></span>
  </span>
  sec
</div>
</div> */
}
