import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const val = (email, password) => console.log(email, password);
  val(email, password);
  return (
    <div>
      <div className=" space-y-5 m-5 text-center">
        <input
          type="text"
          className="border px-4"
          placeholder="enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          name="password"
          type="password"
          className="border  px-4"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="submit"
          className=" bg-green-500 text-white px-3 rounded-lg"
        />
      </div>
      <a href="/register" className="text-center">
        if you dont have an account sign up
      </a>
    </div>
  );
}

export default Login;
