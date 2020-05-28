import { combineEpics } from "redux-observable";
import { filter, tap, mapTo } from "rxjs/operators";

import mode, { Mode } from "./mode";
import auth from "./auth";

const connectEpic = action$ =>
  action$.pipe(
    filter(auth.actions.fetchedGoogleToken.match),
    tap(ev => console.log(ev)),
    mapTo(mode.actions.transitionState(Mode.Connecting))
  );

export default combineEpics(connectEpic);
