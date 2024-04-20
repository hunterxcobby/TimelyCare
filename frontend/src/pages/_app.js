import { AuthProvider, useAuth } from "./AuthContext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import PatientNavbar from "./components/PatientNavbar"; // Import PatientNavbar
import SpecialistNavbar from "./components/SpecialistNavbar"; // Import SpecialistNavbar
import Head from "next/head";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <Head></Head>
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;

