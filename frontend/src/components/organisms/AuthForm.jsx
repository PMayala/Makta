import { useNavigate } from "react-router-dom";

export default function AuthForm({ pageType, children }) {
  const navigate = useNavigate();

  function handleClick() {
    const page = pageType === "login" ? "/register" : "/login";
    navigate(`${page}`);
  }

  return (
    <div className="bg-white text-center py-16 px-8 md:px-32 font-karla w-full md:w-1/2 lg:w-1/3 mx-auto">
      <h2 className="text-xl font-medium mb-4 text-gray-500">
        It is our great pleasure to have you on board!
      </h2>
      {children}
      <p className="mt-4">
        {pageType === "login"
          ? "Don't have an account? "
          : "Already have an account? "}{" "}
        <button className="text-blue-500 font-bold" onClick={handleClick}>
          {pageType === "login" ? "Sign up" : "Log In"}
        </button>
      </p>
    </div>
  );
}
