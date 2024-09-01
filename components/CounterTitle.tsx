import { Creepster } from "next/font/google";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creepster",
});

export interface Props {
  time: number;
}

export default function CounterTitle(props: Props) {
  const titleSwitch = () => {
    switch (true) {
      case props.time === 365:
        return <h1>Bye bye spookytime! Until next time</h1>;
        break;
      case props.time === 0:
        return <h1>It is the spookiest day of the year!</h1>;
        break;
      case props.time <= 31:
        return <h1>It is spooky time!</h1>;
        break;
      case props.time <= 59:
        return <h1>It is almost spooky time...</h1>;
        break;
      case props.time >= 60:
        return <h1>It is not spooky time yet</h1>;
        break;
    }
  };

  return (
    <div
      className={` ${creepster.variable} font-sans text-white mb-4 px-4 text-5xl text-center text-shadow-orange sm:text-6xl  xl:text-8xl`}
    >
      {titleSwitch()}
    </div>
  );
}
