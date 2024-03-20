import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/footer";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
     
    </Head>
     

      <Navbar/>
     <Component {...pageProps} /> 
     <Footer />
   </>
  )
}
