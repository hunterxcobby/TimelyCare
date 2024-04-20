
import ProtectedRoute from "../ProtectedRoute";
import PatientLayout from "../layouts/PatientLayout";
  import Homepage from "../Homepage";

  export default function dashboard() {
    return (
       
  
      <PatientLayout>   
           <Homepage/> 
      </PatientLayout>
  
    );
  }
  