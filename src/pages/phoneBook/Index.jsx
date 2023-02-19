import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import s from "./phoneBook.module.css";

const PhoneBookPage = () => (
  <div className="App">
    <div className={s.wrapperHeader}>
      <Navigation />
      <Container />
    </div>
    <footer className={s.footer}>Footer</footer>
  </div>
);

export default PhoneBookPage;
