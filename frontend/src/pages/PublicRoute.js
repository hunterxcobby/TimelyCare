import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "./AuthContext";

function PublicRoute({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/"); // Redirect to home page if user is logged in
    }
  }, [isLoggedIn, router]);

  return children;
}

export default PublicRoute;