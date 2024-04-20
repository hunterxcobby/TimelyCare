import PatientNavbar from "../components/PatientNavbar";
import Homepage from "../Homepage";
import Footer from "../components/Footer";

export default function PatientLayout({ children }) {
  return (
    <div>
      <PatientNavbar/>
      {children}
     
   
      </div>
  );
}