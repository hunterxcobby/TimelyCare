import { useAuth } from "../AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();
    // You can also add any additional logic here, such as redirecting to the login page
  };

  return (
    <button onClick={handleLogout} className="text-two font-play hover:text-indigo-500">
      Log Out
    </button>
  );
};

export default LogoutButton;
