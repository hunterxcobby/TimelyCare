import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "./AuthContext";
import PatientNavbar from "./components/PatientNavbar";
import SpecialistNavbar from "./components/SpecialistNavbar";

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

  return (
    <>
      {children}
    </>
  );
}