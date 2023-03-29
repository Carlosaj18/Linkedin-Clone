import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginEmailHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const loginGoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userAuth = result.user;
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
      );
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const registerEmailHandler = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userAuth.user, {
        displayName: name,
        photoUrl: profilePic,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
      alert(`User Created - ${email}`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt="Linkedin main logo"
      />

      <form>
        <input
          placeholder="Full name (required for register)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginEmailHandler}>
          Sign In
        </button>
        <div class="flex-icon">
          <div class="circulo">
            <GoogleIcon onClick={loginGoogleHandler} />
          </div>
          <div class="circulo">
            <InstagramIcon />
          </div>
          <div class="circulo">
            <TwitterIcon />
          </div>
        </div>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerEmailHandler}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
