
import ProtectedRoute from "../../components/ProtectedRoute";
import PatientLayout from "../../layouts/PatientLayout";
import Appointments from "./Patient/Appointments";
function PatientDashboardPage() {
  return (
    <ProtectedRoute>
      <PatientLayout>
     
      </PatientLayout>
    </ProtectedRoute>
  );
}

export default PatientDashboardPage;
