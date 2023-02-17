import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PhoneBook from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <PhoneBook />
    </BrowserRouter>
  );
};

export default App;
