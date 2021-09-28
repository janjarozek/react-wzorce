import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./styles.scss";
import PassphraseForm from "./components/PassphraseForm";
import Content from "./components/Content";
import Header from "./components/Header";
import Home from "./components/Home";

import Places from "./pages/Places";
import Movies from "./pages/Movies";

export const MyContext = React.createContext();
export const UserContext = React.createContext();

// const fancyUser = {
//   email: "jan.kowalski@react.jsx",
//   isAdmin: false
// }
const defaultUser = {
  name: 'name',
  surname: 'surname',
  adress: 'adress',
  email: 'email',
  isAdmin: false
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setLogged = (value) => {
      this.setState(() => ({
        isLogged: value
      }));
    };
    this.setUser = (value) => {
      this.setState(() => ({
        userName: value
      }));
    };
    this.state = {
      appKey: "pass",
      userName: "",
      isLogged: false,
      setLogged: this.setLogged,
      setUser: this.setUser
    };
  }

  render() {
    return (
      <Router>
        <Switch>
        <div className="App">
          <Header />
          <MyContext.Provider value={this.state}>
            <Route exact path="/pass-form">
              <PassphraseForm />
            </Route>
            <Route exact path="/content">
              <Content />
            </Route>
            <UserContext.Provider value={defaultUser}>
              <Route exact path="/movies">
                <Movies />
              </Route>
              <Route exact path="/places">
                <Places />
              </Route>
            </UserContext.Provider>
          </MyContext.Provider>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
        </Switch>
      </Router>
    );
  }
}
