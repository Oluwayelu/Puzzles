import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PLAY, WELCOME } from "./routes";
import { Play, Welcome } from "pages";
import { Loader } from "components";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={WELCOME} component={Welcome} />
          <Route path={PLAY} component={Play} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
