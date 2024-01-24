"use client";

import Image from "next/image";
import google_icon from "../../../public/accesories/google-svgrepo-com.svg";

const SignIn = () => {

    const googleClickHandler = () => {
        const scopes = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth?'+
        'client_id=106828971655-dhjqrif0q84k9si1s02dlpvh1giru6du.apps.googleusercontent.com&'+
        'redirect_uri=http://127.0.0.1:3000&'+
        'response_type=token&'+
        'scope='+scopes+'&'+
        'include_granted_scopes=true&'+
        'state=pass-through value';

        window.open(oauth2Endpoint, 'blank', 'location=yes,height=600,width=600,scrollbars=yes,status=yes,top=200,left=400');
    }
  return (
    <div>
      <h1>Sign In</h1>
      <input name="email" placeholder="example@email.com" />
      <input name="password" />
      <h3>Or</h3>
      <Image
        src={google_icon}
        alt="cart icon"
        style={{ height: "50px", width: "auto" }}
        onClick={googleClickHandler}
      />
    </div>
  );
};
export default SignIn;
