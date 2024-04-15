import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const getAllUser = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/api/vercel");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/register", [
        {
          email,
          password,
          confirmPassword,
        },
      ]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-5 text-center m-5">
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="border"
        name="password"
        placeholder="create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="border"
        name="setpassword"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <Link
        to={"/welcome"}
        type="submit"
        onClick={postData}
        value="Submit"
        className="bg-green-500"
      >
        submit
      </Link>
    </div>
  );
}

export default Register;
