import Image from "next/image";
import pumpkin from "../img/pumpkin.png";
import spooky from "../img/spooky-season.png";
import party from "../img/halloween-party.png";

export interface Props {
  time: number;
}

function CounterImage(props: Props) {
  const imageSwitch = () => {
    switch (true) {
      case props.time === 0:
        return <Image src={party} quality={100} alt="halloween party" />;
        break;
      case props.time <= 31:
        return <Image src={spooky} quality={100} alt="spooky season" />;
        break;

      case props.time >= 32:
        return <Image src={pumpkin} quality={100} alt="pumpkin" />;
        break;
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 overflow-hidden size-[16rem] sm:size-[20rem] sm:ml-4 sm:mt-8 lg:size-[30rem] xl:size-[40rem] xl:mt-6  ">
      {imageSwitch()}
    </div>
  );
}

export default CounterImage;
