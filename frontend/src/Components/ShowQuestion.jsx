export default function ShowQuestion({ q, op1, op2, op3, op4, correct }) {
  return (
    <>
      <div>
        <h4>Q. {q}</h4>
        <ol>
          <li>Options:</li>
          <li>1. {op1}</li>
          <li>2. {op2}</li>
          <li>3. {op3}</li>
          <li>4. {op4}</li>
        </ol>
        <h4>Correct : {correct}</h4>
      </div>
    </>
  );
}
