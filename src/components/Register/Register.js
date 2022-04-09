import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Please Register</h1>
      <form>
        <input type="text" placeholder="Your Name" id="" />
        <br />
        <input type="email" placeholder="Your Email" id="" />
        <br />
        <input type="password" placeholder="Your Password" id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
