import { useState, useEffect, useRef } from "react";
import TakeQuiz from "./TakeQuiz";
import Timer from "./Timer";

export default function Quiz() {
  const [ans, setAns] = useState(0);
  const [questions, setQuestions] = useState([]);
  console.log(ans);

  useEffect(() => {
    async function getAllQuetions() {
      const response = await fetch("http://localhost:3001/questions/all", {
        method: "GET",
      });

      let resData = await response.json();
      resData = JSON.parse(resData);

      setQuestions(resData);
    }
    getAllQuetions();
  }, []);
  return (
    <>
      <Timer time={10000} />
      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ol style={{ display: "flex", flexDirection: "column" }}>
            {questions.map((question, index) => {
              return (
                <li key={index}>
                  <TakeQuiz
                    q={question.question}
                    op1={question.answers[0]}
                    op2={question.answers[1]}
                    op3={question.answers[2]}
                    op4={question.answers[3]}
                    correct={question.correct}
                    index={index}
                    setAns={setAns}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
}
