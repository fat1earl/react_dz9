import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

// import { AccountingList } from "./components/accounting/AccountingList";
// import { AccountingForm } from "./components/accounting/AccountingForm";
import { AccountingPage } from "./components/accounting/AccountingPage";
function App() {
  return (
    <BrowserRouter>
      <AccountingPage />
    </BrowserRouter>
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/">
    //       <Redirect to="/accounting" />
    //     </Route>
    //     <Route exact path="/accounting">
    //       <AccountingList />
    //     </Route>
    //     <Route path="/accounting/add">
    //       <AccountingForm />
    //     </Route>
    //     <Route path="/accounting/:accountingId">
    //       {({
    //         match: {
    //           params: { accountingId },
    //         },
    //       }) => <AccountingForm accountingId={accountingId} />}
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
