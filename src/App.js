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

import ContextHandler from "./components/ContextHandler";

export default function App() {
  return (
      <ContextHandler>
        <Router>
        <Switch>
          <div className="App">
            <Header />
            <Route exact path="/pass-form">
              <PassphraseForm />
            </Route>
            <Route exact path="/content">
              <Content />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/places">
              <Places />
            </Route>
          </div>
        </Switch>
        </Router>
      </ContextHandler>
  );
}
