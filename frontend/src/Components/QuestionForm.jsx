import { useRef, useState } from "react";
import ShowQuestion from "./ShowQuestion";

export default function QuestionForm() {
  const [questions, setQuestions] = useState([]);

  const question = useRef();
  const op1 = useRef();
  const op2 = useRef();
  const op3 = useRef();
  const op4 = useRef();
  const ans = useRef();

  async function handleSubmit() {
    const q = question.current.value;
    const o1 = op1.current.value;
    const o2 = op2.current.value;
    const o3 = op3.current.value;
    const o4 = op4.current.value;
    const correct = ans.current.value;

    const obj = {
      question: q,
      answers: [o1, o2, o3, o4],
      correct,
    };

    const response = await fetch("http://localhost:3001/questions", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resData = await response.json();
    resData = JSON.parse(resData);

    alert(resData.message);
  }

  async function getAllQuetions() {
    const response = await fetch("http://localhost:3001/questions/all", {
      method: "GET",
    });

    let resData = await response.json();
    resData = JSON.parse(resData);

    setQuestions(resData);
  }
  return (
    <>
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">QuestionName:</label>
          <input type="text" id="question" name="question" ref={question} />
        </div>
        <div>
          <label htmlFor="answers">Answers:</label>
          <input type="text" name="option1" ref={op1} />
          <input type="text" name="option2" ref={op2} />
          <input type="text" name="option3" ref={op3} />
          <input type="text" name="option4" ref={op4} />
        </div>
        <div>
          <label htmlFor="correct">Correct Answer:</label>
          <input type="text" name="correctAnswer" ref={ans} />
        </div>
        <button>submit</button>
      </form>
      <div>
        <h2>Get all questions: </h2>
        <button onClick={getAllQuetions}>Get</button>
        {questions.length && (
          <ol style={{ display: "flex", flexDirection: "column" }}>
            {questions.map((question, index) => {
              return (
                <li key={index}>
                  <ShowQuestion
                    q={question.question}
                    op1={question.answers[0]}
                    op2={question.answers[1]}
                    op3={question.answers[2]}
                    op4={question.answers[3]}
                    correct={question.correct}
                  />
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </>
  );
}
