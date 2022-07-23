import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default function Logout(props) {
  const { setScreen } = props;
  const deleteCookie = async () => {
    try {
      await axios.get("/clear-cookie");
      console.log("========");
      setScreen('auth');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    deleteCookie();
  });
  return <Navigate to="/" />;
}
