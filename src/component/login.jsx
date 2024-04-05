import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginState } from "../redux/slice/loginState";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const userArray = useSelector((state) => state.users);
  const loginState = useSelector((state) => state.loginState);

  const handleLogin = () => {
  
    const obj = userArray?.data?.find((user, index) =>email == user.email && password == user.password)
    if(obj){
    dispatch(setLoginState(true));
   
    }
    else{
      alert("Username or password incorrect")
    }
  };

  
  useEffect(() => { 
    if (loginState) {
      navigate("/");
    }
  }, [loginState]);

  // console.log(email, login.email, password, login.passWord);

  return (
    <div className="flex items-center min-h-screen px-4 bg-black text-green-500 font-vt">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="text-center flex flex-col items-center gap-5">
          <div className="flex gap-2">
            <FaSpotify className="text-4xl" />
            <h1 className="text-3xl font-bold">Spotify</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account <br />
            and start listening to millions of songs!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="space-y-2 flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              className="outline-none input-field border px-5 py-2 border-gray-200 rounded-md"
              id="email"
              placeholder="m@example.com"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col ">
            <label htmlFor="password">Password</label>
            <input
              className="outline-none input-field border px-5 py-2 border-gray-200 rounded-md"
              id="password"
              placeholder="password"
              type="password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <Link
            // to={email == login.email && password == user.password && "/"}
            >
              <button
                onClick={handleLogin}
                className="w-full px-5 py-2 text-gray-200 rounded-md bg-green-500 hover:bg-green-400 hover:text-gray-700 transition-all duration-300 ease-out"
                type="submit"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="flex justify-between">
            <Link to="/signup" className="underline" href="#">
              SignUp
            </Link>
            <a className="underline" href="#">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
