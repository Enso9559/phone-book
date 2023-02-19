import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import "./phoneBook.css";

const PhoneBookPage = () => (
  <div className="App">
    <div className="wrapper-header">
      <Navigation />
      <Container />
    </div>
    <footer className="footer">Footer</footer>
  </div>
);

export default PhoneBookPage;
