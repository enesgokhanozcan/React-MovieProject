import "./App.css";
import Header from "./component/Header";
import MovieDetail from "./component/MovieDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movieDetail/:id" element={<MovieDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
