import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/register", [
        {
          email,
          password,
        },
      ]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
          onClick={loginData}
          className=" bg-green-500 text-white px-3 rounded-lg"
        />
      </div>
      <Link to="/register" className="text-center">
        if you dont have an account sign up
      </Link>
    </div>
  );
}

export default Login;
