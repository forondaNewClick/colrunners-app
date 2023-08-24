import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser, UserKey } from "../../redux/states/User/userSlice";
import { clearLocalStorage } from "../../utilities/localStorage.utility";
import { PublicRoutes } from "../../models/routes";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  // return <button onClick={logOut}>Log Out</button>;
}
export default Logout;
