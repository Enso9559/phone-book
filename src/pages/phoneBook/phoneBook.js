import Container from "../../Container/container";
import Navigation from "../../Navigation/navigation";
import "./phoneBook.css";

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
