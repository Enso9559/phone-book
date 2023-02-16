import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PhoneBook from "./pages/pages";

const App = () => {
  return (
    <BrowserRouter>
      <PhoneBook />
    </BrowserRouter>
  );
};

export default App;
