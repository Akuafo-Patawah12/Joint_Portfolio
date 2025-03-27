import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</h2>
            <p className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
            <Link
              to="/"
              className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      );
};

export default Errorpage;