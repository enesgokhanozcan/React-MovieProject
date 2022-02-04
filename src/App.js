import "./App.css";
import Header from "./component/Header";
import MovieDetail from "./component/MovieDetail";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <MovieDetail/>
    </div>
  );
}

export default App;
