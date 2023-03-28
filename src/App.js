import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import HomePage from "./scenes/homePage/homePage";
import LoginPage from "./scenes/LoginPage/Login";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;

/** @
 *
 */
