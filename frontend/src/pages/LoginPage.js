// pages/index.js
// Landing page or login page
import LoginPage from "./Login";
import { useAuth } from "./AuthContext";

function LoginPages() {
  const { login } = useAuth();

  const handleLogin = (userType) => {
    // Perform login logic here
    login(userType);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginPage onLogin={handleLogin} />
    </div>
  );
}

export default LoginPages;
