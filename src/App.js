import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PhoneBook from "./pages/Index";

const App = () => {
  return (
    <BrowserRouter>
      <PhoneBook />
    </BrowserRouter>
  );
};

export default App;
