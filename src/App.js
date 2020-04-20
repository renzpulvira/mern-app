import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/:id" component={UserPage} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </div>
  );
  return <div className="App">Test 123</div>;
}

export default App;
