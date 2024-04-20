
import ProtectedRoute from "../ProtectedRoute";
import SpecialistLayout from "../layouts/SpecialistLayout";
  import Homepage from "../Homepage";
 
  import Appointments from "../Patient/Appointments";
  export default function dashboard() {
    return (
       
  
      <SpecialistLayout>
     <Homepage/>
      </SpecialistLayout>
             
        // </PatientLayout>
  
    );
  }
  