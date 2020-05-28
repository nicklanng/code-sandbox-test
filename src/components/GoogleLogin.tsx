import React from "react";
import { useDispatch } from "react-redux";
import auth from "../store/auth";
import { AppDispatch } from "../store/store";

import GoogleLogin from "react-google-login";

const OurGoogleLogin: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <GoogleLogin
      theme="dark"
      clientId="203228902423-04faqdjemmu8nn10h245rtddh0tbe03v.apps.googleusercontent.com"
      onSuccess={r => dispatch(auth.actions.fetchedGoogleToken(r.accessToken))}
      onFailure={r => console.log(r)}
      // isSignedIn={true}
    />
  );
};

export default OurGoogleLogin;
