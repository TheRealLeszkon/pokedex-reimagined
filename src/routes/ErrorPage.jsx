import { useRouteError, Link } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center h-screen dark:text-amber-50 bg-amber-50 flex-col dark:bg-gray-900">
      You Shouldnt Be here!
      <Link to="/" className="dark:bg-gray-800 bg-gray-200 p-3 rounded-2xl">
        {" "}
        Go Back To Pokedex{" "}
      </Link>
    </div>
  );
}

export default ErrorPage;
