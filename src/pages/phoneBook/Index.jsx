import Container from "../../Container";
import Navigation from "../../Navigation";
import "./PhoneBook.css";

const PhoneBookPage = () => {
  return (
    <div className="App">
      <div className="wrapper-header">
        <Navigation />
        <Container />
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default PhoneBookPage;
