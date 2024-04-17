// ProtectedRoute.js
// A wrapper component to guard access to certain routes based on authentication and user type
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isLoggedIn, userType } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      
      router.push("/login");
    } else {

      if (userType === "Patient") {
        router.push("/Patient/dashboard");
      } else if (userType === "Specialist") {
        router.push("/Specialist/dashboard");
      }
    }
  }, [isLoggedIn, userType, router]);

  return <>{children}</>;
}

export default ProtectedRoute;
