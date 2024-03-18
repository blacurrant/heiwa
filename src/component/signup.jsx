import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setReState } from "../redux/slice/login";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  
  const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\s]{8,}$/;
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailValid.test(value)) {
      console.log("find yourself a valid email.") ;
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordValid.test(value)) {
      console.log("you can do better, its just 8 good numbers.", value);
    }
  };

  const handleSubmit = () => {
    // if (!emailValid.test(email) || !passwordValid.test(password) || password !== confirmPassword) {
    //   console.log("not enough");
    //   return;
    // }
    dispatch(setReState({ username, email, password }));
  };

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black text-green-500">
      <div className="w-[50vh] h-[100%] space-y-4">
        <div className="flex items-center space-x-4">
          <FaSpotify className="text-4xl" />

          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tighter">
              Create your Spotify account
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link to="/login" className="underline" href="#">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="text">Username</label>
            <input
              required
              className="border border-black px-5 py-2 outline-none rounded-md"
              id="email"
              placeholder="pick a username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email">What's your email?</label>
            <input
              required
              className="border border-black px-5 py-2 outline-none rounded-md"
              id="email"
              placeholder="Enter email"
              type="email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="password">Create a password</label>
            <input
              required
              className="border border-black px-5 py-2 outline-none rounded-md"
              id="password"
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="password">Confirm password</label>
            <input
              required
              className="border border-black px-5 py-2 outline-none rounded-md"
              id="password"
              placeholder="Password"
              type="password"
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <Link to={(emailValid.test(email) && passwordValid.test(password) && password === confirmPassword) && '/login'}>
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-400 hover:text-gray-700 transition-all duration-300 ease-out text-gray-200 px-5 py-2 rounded-md"
            >
              Sign Up
            </button>
          </Link>
          <div className="text-center text-sm flex flex-col">
            By clicking on Sign up, you agree to Spotify's
            <Link className="underline" href="#">
              Terms and Conditions
            </Link>
            and
            <Link className="underline" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
