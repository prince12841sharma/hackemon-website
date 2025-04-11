import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Target Date: April 24, 2025
const COUNTDOWN_TO = new Date("2025-04-24");

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  return (
    <div className="w-[12rem] md:w-[22rem] flex justify-center itmes-center p-2">
      <div className="mx-auto flex w-[11rem] md:w-[20rem] max-w-md items-center bg-white h-full p-2 rounded-md">
        <CountdownItem unit="Day" text="D" isLast={false} />
        <CountdownItem unit="Hour" text="H" isLast={false} />
        <CountdownItem unit="Minute" text="M" isLast={false} />
        <CountdownItem unit="Second" text="S" isLast={true} />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text, isLast }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className={`flex w-1/4 flex-col ${!isLast ? 'border-r-2 border-stone-600' : ''} items-center justify-center text-center`}>
      <span
        ref={ref}
        className="block text-lg font-semibold text-black md:text-xl"
      >
        {time}
      </span>
      <span className="text-xs font-light text-slate-500">{text}</span>
    </div>
  );
};

export default ShiftingCountdown;

const useTimer = (unit) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCountdown = async () => {
    const now = new Date();
    const distance = COUNTDOWN_TO - now;

    let newTime =
      unit === "Day"
        ? Math.floor(distance / DAY)
        : unit === "Hour"
        ? Math.floor((distance % DAY) / HOUR)
        : unit === "Minute"
        ? Math.floor((distance % HOUR) / MINUTE)
        : Math.floor((distance % MINUTE) / SECOND);

    if (newTime !== timeRef.current) {
      await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.3 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.3 });
    }
  };

  return { ref, time };
};