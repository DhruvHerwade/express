import { useEffect, useState } from "react";

export default function Timer({ time }) {
  const [curr, setTime] = useState(time);

  if (curr === 0) {
    alert("Time Up");
  }

  useEffect(() => {
    let interval;
    if (curr > 0) {
      interval = setTimeout(() => {
        setTime((time) => time - 100);
      }, 100);
    }
    return () => clearTimeout(interval);
  }, [curr]);
  return (
    <>
      <h2>
        Quiz time left : <span>{curr / 1000}</span>
      </h2>
    </>
  );
}
