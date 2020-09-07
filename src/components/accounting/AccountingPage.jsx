import React from "react";
import { Switch, Redirect, Route, NavLink } from "react-router-dom";
import { useFirebaseCollection } from "../../useFirebase";

import { AccountingList } from "./AccountingList";
import { AccountingForm } from "./AccountingForm";

export function AccountingPage() {
  const {
    data: accounting,
    error,
    isLoading,
    add,
    update,
    remove,
  } = useFirebaseCollection("/accounting");

  if (isLoading) {
    return "...Loading...";
  }

  if (error) {
    return `Error: ${error.message}`;
  }
  return (
    <>
      <ul>
        <li>
          <NavLink to="/accounting"> Accounting control page </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Redirect to="/accounting" />;
        </Route>
        <Route exact path="/accounting">
          <AccountingList remove={remove} accounting={accounting} />
        </Route>
        <Route path="/accounting/add">
          <AccountingForm save={add} />
        </Route>
        <Route path="/accounting/:accountingId">
          {({
            match: {
              params: { accountingId },
            },
          }) => (
            <AccountingForm
              cost={accounting.find((accounting) => accounting.id === accountingId)}
              save={(fields) => update(accountingId, fields)}
            />
          )}
        </Route>
      </Switch>
    </>
  );
}