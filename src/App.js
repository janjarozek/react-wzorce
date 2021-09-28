import React from "react";

import "./styles.css";
import PassphraseForm from "./components/PassphraseForm";
import Content from "./components/Content";

export const MyContext = React.createContext();

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
      <div className="App">
        <h2>Another React context example!</h2>
        <MyContext.Provider value={this.state}>
          <PassphraseForm />
          <Content />
        </MyContext.Provider>
      </div>
    );
  }
}
