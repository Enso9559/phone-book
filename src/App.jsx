import { BrowserRouter } from "react-router-dom";
import s from './App.module.scss';
import PhoneBook from "./pages";

const App = () => (
  <BrowserRouter>
    <PhoneBook />
  </BrowserRouter>
);

export default App;
