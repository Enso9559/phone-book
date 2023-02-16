import Container from "../../Container/Index";
import Navigation from "../../Navigation/Index";
import "./PhoneBook.css";

const PhoneBookPage = () => {
  return (
    <div className="App">
      <div className="wrapper-header">
        <Navigation />
        <Container />
      </div>
      <footer className="foter">Footer</footer>
    </div>
  );
};

export default PhoneBookPage;
