import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes: FC<{}> = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={NotFound} path="*" />
    </Switch>
  );
};

export default Routes;
