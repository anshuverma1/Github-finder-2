import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Search from "./components/Search";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <Users />
      </Container>
    </>
  );
}

export default App;
