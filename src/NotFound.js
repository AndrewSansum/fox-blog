import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404 - Page not found!!!!</h2>
      <p>Looks like you tried to access a page that doesn't exist. Sorry!</p>
      <Link to="/">Time to return home...</Link>
    </div>
  );
};

export default NotFound;
