import { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setpassword, setSetpassword] = useState("");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      email: email,
      password: password,
      setpassword: setpassword,
    });
  }, [email, password, setpassword]);

  const getAllUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/vercel");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <form onSubmit={postData} className="space-y-5 text-center m-5">
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
        value={setpassword}
        onChange={(e) => setSetpassword(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" className="bg-green-500" />
    </form>
  );
}

export default Register;
