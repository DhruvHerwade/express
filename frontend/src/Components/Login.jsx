import "./Login.css";
import { useRef } from "react";

export default function Login({ login, setLoggedIn }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const name = Uname.current.value;
    const password = Upass.current.value;

    const obj = {
      name,
      password,
      login,
    };

    const response = await fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();

    if (resData.message !== "Not authenticate") {
      alert("Logged In as " + login);
      setLoggedIn(login);
    }
  }
  const Uname = useRef();
  const Upass = useRef();
  return (
    <>
      <div id="login">
        <h2>Login as {login}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">UserName:</label>
            <input type="text" id="name" name="userName" ref={Uname} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" ref={Upass} />
          </div>
          <button>submit</button>
        </form>
      </div>
    </>
  );
}
