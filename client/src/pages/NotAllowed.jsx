import AdminPage from "./AdminPage";
import { useNavigate } from "react-router-dom";

const NotAllowed = () => {
  const navigate = useNavigate();

  return (
    <AdminPage>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-200 via-red-100 to-pink-50">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-sm transform transition duration-500 hover:scale-105">
          <div className="flex justify-center mb-6">
            <span className="text-8xl animate-bounce">🚫</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-red-600">
            Access Denied
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            You do not have permission to view this page.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Go to Home
          </button>
        </div>
      </div>
    </AdminPage>
  );
};

export default NotAllowed;
