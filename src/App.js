import "./App.css";
import Header from "./component/Header";
import MovieDetail from "./component/MovieDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
