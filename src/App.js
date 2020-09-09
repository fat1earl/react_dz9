import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import { AccountingPage } from "./components/accounting/AccountingPage";
function App() {
  return (
    <BrowserRouter>
      <AccountingPage />
    </BrowserRouter>
  );
}

export default App;
