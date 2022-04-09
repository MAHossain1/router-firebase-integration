import React from "react";
import useFirbase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirbase();
  return (
    <div>
      <h1>Please login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Signin with Google</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" id="" />
        <br />
        <input type="password" placeholder="Your Password" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
