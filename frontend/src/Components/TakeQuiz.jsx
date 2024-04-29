import { useRef } from "react";

export default function TakeQuiz({ q, op1, op2, op3, op4, correct, setAns }) {
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();

  function selectAns(event) {
    const selected = event.target.innerText;

    event.target.style.backgroundColor = "red";
    b1.current.style.pointerEvents = "none";
    b2.current.style.pointerEvents = "none";
    b3.current.style.pointerEvents = "none";
    b4.current.style.pointerEvents = "none";

    if (selected === correct) setAns((ans) => ans + 1);

    console.log(selected, correct);
  }

  return (
    <>
      <div>
        <h4>Q. {q}</h4>
        <ol>
          <li>Options:</li>
          <li>
            1.
            <button onClick={selectAns} ref={b1}>
              {op1}
            </button>
          </li>
          <li>
            2.
            <button onClick={selectAns} ref={b2}>
              {op2}
            </button>
          </li>
          <li>
            3.
            <button onClick={selectAns} ref={b3}>
              {op3}
            </button>
          </li>
          <li>
            4.
            <button onClick={selectAns} ref={b4}>
              {op4}
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
