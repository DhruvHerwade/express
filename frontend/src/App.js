import Dashboard from "./Components/Dashboard";
import { useState } from "react";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import QuestionForm from "./Components/QuestionForm";

export default function App() {
  const [login, setLogin] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  return (
    <>
      {login === "" && loggedIn === "" && <Dashboard setLogin={setLogin} />}
      {login !== "" && loggedIn === "" && (
        <Login login={login} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn === "student" && <Quiz />}
      {loggedIn === "faculty" && <QuestionForm />}
    </>
  );
}
