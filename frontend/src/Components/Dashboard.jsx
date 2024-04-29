import "./Dashboard.css";

export default function Dashboard({ setLogin }) {
  return (
    <>
      <div id="login">
        <h2>Login as..</h2>
        <ol>
          <li>
            <button onClick={() => setLogin("admin")}>Admin</button>
          </li>
          <li>
            <button onClick={() => setLogin("faculty")}>Faculty</button>
          </li>
          <li>
            <button onClick={() => setLogin("student")}>Student</button>
          </li>
        </ol>
      </div>
    </>
  );
}
