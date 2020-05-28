import { combineEpics } from "redux-observable";
import { filter, tap } from "rxjs/operators";

import auth from "./auth";

const connectEpic = action$ =>
  action$.pipe(
    filter(auth.actions.fetchedGoogleToken.match),
    tap(ev => console.log(ev))
  );

export default combineEpics(connectEpic);
