import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./Container/container";
import Navigation from "./Navigation/navigation";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appHeader">
          <Navigation />
          <Container />
        </div>
        <footer className="foter">Footer</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
