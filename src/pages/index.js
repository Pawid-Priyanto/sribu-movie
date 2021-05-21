import React from "react";
import loadable from "@loadable/component";
import { Switch, Route } from "react-router-dom";

const Detail = loadable(() => import("./detail"));
const Home = loadable(() => import("./home"));

const Page = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/actor/:id" component={Detail} />
    </Switch>
  );
};

export default Page;
