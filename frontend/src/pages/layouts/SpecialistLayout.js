// layouts/SpecialistLayout.js
import SpecialistNavbar from "../components/SpecialistNavbar";
import Footer from "../components/Footer";

function SpecialistLayout({ children }) {
  return (
    <div>
      <SpecialistNavbar />
      <div>
        <h2>Success</h2>
      </div>
      <Footer />
    </div>
  );
}

export default SpecialistLayout;
