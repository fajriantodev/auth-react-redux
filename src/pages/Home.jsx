import { useDispatch } from "react-redux";
import { logOut } from "../utils/redux/user-slice";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
  };
  const data = useSelector((state) => state);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5">
      <h3 className="text-center">
        Welcome, <span className="font-bold">{data.auth.user}</span>
      </h3>
      <button
        type="submit"
        className="w-full rounded-lg bg-violet-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 sm:w-auto"
        onClick={signOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
