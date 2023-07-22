import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Routes/Router";
import Header from "./Routes/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
