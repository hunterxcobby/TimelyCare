// layouts/PatientLayout.js
import PatientNavbar from "../components/PatientNavbar";
import Footer from "../components/Footer";

function PatientLayout({ children }) {
  return (
    <div>
      <PatientNavbar />
      <div>
      <h2>Success</h2>
      </div>
      <Footer />
    </div>
  );
}

export default PatientLayout;
