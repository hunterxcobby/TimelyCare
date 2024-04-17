// pages/patient/dashboard.js
// Patient dashboard page
import ProtectedRoute from "../../components/ProtectedRoute";
import PatientLayout from "../../layouts/PatientLayout";

function PatientDashboardPage() {
  return (
    <ProtectedRoute>
      <PatientLayout>
        <h2>http://localhost:3000/Patient/dashboard</h2>
      </PatientLayout>
    </ProtectedRoute>
  );
}

export default PatientDashboardPage;
