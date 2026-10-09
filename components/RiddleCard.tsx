export default function RiddleCard({ title, answer }: any) {
  return (
    <div className="card bg-black/70 max-w-[90%] m-auto shadow-xl w-[28rem] h-[22rem] relative ">
      <div className="card-body ">
        <div>
          <p className="pt-2 text-white text-md ">{title}</p>
        </div>
        <div className="absolute right-[50%] translate-x-2/4 top-[70%] w-[12rem] lg:top-[60%] lg:w-[14rem] ">
          <details className="collapse bg-[#5984ad] ">
            <summary className="collapse-title text-md text-white font-medium pl-11 text-center transform transition-colors duration-150  select-none ">
              Reveal Answer
            </summary>
            <div className="collapse-content ">
              <p className="text-white text-md text-shadow-black text-center">
                {answer}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
