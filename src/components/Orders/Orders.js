import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Orders = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>Who is the first orderer?</h1>
      <h3>{user ? user.displayName : "no one yet"}</h3>
    </div>
  );
};

export default Orders;
