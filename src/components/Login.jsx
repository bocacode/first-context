import { useContext } from "react";
import { UserInfoContext } from "../App";

export default function Login() {
  const { setUser, setIsLoggedIn } = useContext(UserInfoContext);
  const handleLogin = () => {
    setIsLoggedIn(true)
    setUser({ name: 'Jonathan', position: 'Drums', band: 'Lane Branden'})
  }
  return <button onClick={handleLogin}>Login</button>
}