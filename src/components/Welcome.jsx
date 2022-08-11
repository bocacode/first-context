import { useContext } from "react";
import { UserInfoContext } from "../App";

export default function Welcome() {
  const { user } = useContext(UserInfoContext);
  return <h1>Welcome {user.name}!</h1>
}