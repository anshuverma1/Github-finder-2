import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import User from "./components/User";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
