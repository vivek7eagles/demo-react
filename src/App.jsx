import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <div className="bg-green-700">vivek</div>
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
