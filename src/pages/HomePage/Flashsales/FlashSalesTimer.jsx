import { useEffect, useState } from "react";

const FlashSalesTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };
  useEffect(() => {
    const deadline = "July, 25, 2024";

    const interval = setInterval(() => getTimeUntil(deadline), 1000);
    return () => clearInterval(interval);
  });

  const displayTimer = () => {
    const formattedDays = days.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return (
      <div className="flex items-center gap-6">
        <div className="flex  flex-col gap-0">
          <span className="text-xs">Days</span>
          <h1 className="text-black font-bold text-[32px] relative ">
            {formattedDays}{" "}
            <span className="text-red ml-1.5 font-semibold inline absolute -top-1">
              :
            </span>
          </h1>
        </div>
        <div className="flex  flex-col gap-0">
          <span className="text-xs">Hours</span>
          <h1 className="text-black font-bold text-[32px] relative ">
            {formattedHours}{" "}
            <span className="text-red ml-1.5 font-semibold inline absolute -top-1">
              :
            </span>
          </h1>
        </div>
        <div className="flex  flex-col gap-0">
          <span className="text-xs">Minutes</span>
          <h1 className="text-black font-bold text-[32px] relative ">
            {formattedMinutes}{" "}
            <span className="text-red ml-1.5 font-semibold inline absolute -top-1">
              :
            </span>
          </h1>
        </div>
        <div className="flex  flex-col gap-0">
          <span className="text-xs">Seconds</span>
          <h1 className="text-black font-bold text-[32px]">
            {formattedSeconds}
          </h1>
        </div>
      </div>
    );
  };
  return <div className="flex items-center gap-3">{displayTimer()}</div>;
};

export default FlashSalesTimer;
