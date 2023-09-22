import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const data = useSelector((state) => state);

  return (
    <BrowserRouter>
      {data.auth.isLoginSuccess ? <Home /> : <Login />}
    </BrowserRouter>
  );
}

export default App;
