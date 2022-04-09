import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is aramer home!! kar Bari?</h2>
      <h5>{user ? user.displayName : "others home"}</h5>
    </div>
  );
};

export default Home;
