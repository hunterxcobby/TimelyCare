// pages/specialist/dashboard.js
// Specialist dashboard page
import ProtectedRoute from "../../components/ProtectedRoute";
import SpecialistLayout from "../../layouts/SpecialistLayout";

function SpecialistDashboardPage() {
  return (
    <ProtectedRoute>
      <SpecialistLayout>
        <div>This is the specialist dashboard page.</div>
      </SpecialistLayout>
    </ProtectedRoute>
  );
}

export default SpecialistDashboardPage;
