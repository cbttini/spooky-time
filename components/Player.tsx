"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

function Player() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const maxVolume = 20;

  const togglePlay = (): void => {
    if (!play) {
      audioRef.current?.play();
      setPlay(true);
    } else {
      audioRef.current?.pause();
      setPlay(false);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const volume = Number(value) / maxVolume;
    audioRef.current!.volume = volume;
  };

  return (
    <main>
      <div
        className={`absolute right-[50%] translate-x-2/4 bottom-[80%]  h-[9rem] bg-[#5984ad] rounded-2xl text-white text-4xl transform 
        transition-all duration-300
         ${play ? "w-[22rem]" : "w-[8rem]"}`}
      >
        <div
          onClick={togglePlay}
          className=" flex items-center justify-center cursor-pointer mt-[3.3rem] mb-1 "
        >
          {play ? <FaPause /> : <FaPlay />}
        </div>

        <div
          className={`flex items-center justify-center  transform transition-all duration-300 ease-linear ${
            play ? "opacity-100 " : "opacity-0"
          }  `}
        >
          <FaVolumeUp className="size-6" />
          <input
            type="range"
            className={`ml-2 accent-gray-800 cursor-pointer transform transition-all duration-300 ${
              play ? "w-[16rem]" : "w-0"
            }`}
            min={0}
            max={maxVolume}
            onChange={(e) => handleVolume(e)}
          />
        </div>
      </div>
      <audio ref={audioRef} src={"/Audio.mp3"} loop />
    </main>
  );
}

export default Player;
