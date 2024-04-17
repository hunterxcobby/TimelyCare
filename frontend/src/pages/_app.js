import { useState } from "react";
import { AuthProvider } from "./AuthContext";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/footer";

export default function App({ Component, pageProps }) {
  const [userType, setUserType] = useState("");

  return (
    <>
    <AuthProvider>
      <Head></Head>
      {userType === "Patient" && <PatientNavbar />}
      {userType === "Specialist" && <SpecialistNavbar />}
      {!userType && <Navbar setUserType={setUserType} />}
      <Component {...pageProps} setUserType={setUserType} />
      <Footer />
    </AuthProvider>
    </>
    
  );
}
