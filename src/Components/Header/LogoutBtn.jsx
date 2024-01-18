import { useDispatch } from "react-redux";
import authService from "../../Appwrite/Auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
      onClick={logoutHandler}
    >
      LogOut
    </div>
  );
};

export default LogoutBtn;
