import { Action } from 'redux'
import { combineEpics, ActionsObservable } from "redux-observable";
import { filter, tap, mapTo } from "rxjs/operators";

import mode from "./mode";
import auth from "./auth";

const connectEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    filter(auth.actions.fetchedGoogleToken.match),
    tap(ev => console.log(ev)),
    mapTo(mode.actions.connecting())
  );

export default combineEpics(connectEpic);
