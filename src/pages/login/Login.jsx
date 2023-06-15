import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../context/AuthProvider";
import { getAuthFromLocalStorage } from "../../services/localstorage-service";
import { authInitialState } from "../../context/initial-states/AuthInitialState";
const testUser = {
  username: "alice@example.com",
  password: "alice123",
};

const Login = () => {
  const navigate = useNavigate()
  const { handleUserLogin, setAuthState } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login | PING CONNECT"
    getAuthFromLocalStorage() !== null ? navigate("/home") : setAuthState(authInitialState);
  }, [navigate, setAuthState]);

  const submitHandlerFn = (e) => {
    e.preventDefault();
    handleUserLogin(loginState);
  };

  const changeHandlerFn = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const testUserHandler = (e) => {
    setLoginState(testUser);
    handleUserLogin(testUser);
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-32 overflow-hidden md:mt-0 md:h-screen lg:py-0">
          <div className="w-full bg-orange-200 border border-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <img className='w-32 h-10'
                  src="https://ik.imagekit.io/pb97gg2as/Ping-Connnect/logo-no-background.png?updatedAt=1686741434507"
                  alt="ping-connect"
                />
                <h1 className="mt-4 text-xl font-bold leading-tight tracking-tight text-center text-gray-700 md:text-2xl">

                  Sign In
                </h1>
              </div>
              <form
                onSubmit={submitHandlerFn}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Your username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    value={loginState.username}
                    onChange={changeHandlerFn}
                    className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-100 border-orange-200 placeholder-gray-500 text-gray-700 focus:ring-orange-200 focus:border-orange-200"
                    placeholder="abc@email.com"
                    required={true}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  {showPassword ? (
                    <EyeIcon
                      onClick={() => setShowPassword(false)}
                      className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={() => setShowPassword(true)}
                      className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                    />
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    minLength="6"
                    value={loginState.password}
                    onChange={changeHandlerFn}
                    placeholder="••••••••"
                    className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-100 border-orange-200 placeholder-gray-500 text-gray-700 focus:ring-orange-200 focus:border-orange-200"
                    required={true}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-700 rounded-lg border-1 border-gray-700 bg-orange-300 focus:ring-4 focus:outline-none hover:bg-orange-300 focus:ring-orange-200"
                >
                  Sign in
                </button>

                <button
                  onClick={testUserHandler}
                  type="button"
                  className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-700 rounded-lg bg-gray-100 focus:ring-4 focus:outline-none  hover:bg-orange-300 focus:ring-orange-200"
                >
                  Test User
                </button>
                <p className="text-sm font-medium text-gray-700">
                  Don't have an account yet?
                  <Link
                    to="/sign-up"
                    className="ml-2 font-medium text-gray-900 hover:underline"
                  >
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
