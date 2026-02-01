import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <p style={{ color: "#999" }}>
        {error.statusText || error.message}
      </p>

      <Link to="/" style={{ color: "#9F7AEA" }}>
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
