import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-gray-200">
      <nav className="flex justify-between p-4">
        <div>
          <Link to="/">MarketPlace</Link>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4">
            {userInfo ? (
              <>
                <li>
                  <Link to="/profile">{userInfo.name}</Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="flex justify-center items-center gap-2">
                  <FaSignInAlt />
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
