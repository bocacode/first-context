import { useContext } from "react";
import { UserInfoContext } from "../App";
import Login from "./Login";
import Logout from "./Logout";

export default function Menubar() {
  const { isLoggedIn } = useContext(UserInfoContext);
  return (isLoggedIn ? <Logout /> : <Login />)
}