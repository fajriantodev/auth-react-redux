import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAPI } from "../utils/redux/user-slice";

function Login() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(authLoginAPI({ email, password }));
    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="container">
        <form onSubmit={handleLogin} className="mx-auto w-96 space-y-6">
          <>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500"
                placeholder="example@email.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500"
                placeholder="type your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-violet-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 sm:w-auto"
            >
              Login
            </button>
          </>
        </form>
        <div className="mt-8 text-center">
          {authState.isLoginPending && (
            <p className="text-gray-900">Loading...</p>
          )}
          {authState.isLoginSuccess && (
            <p className="text-gray-900">Login success</p>
          )}
          {authState.errorMessages && (
            <p className="text-gray-900">{authState.errorMessages}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
