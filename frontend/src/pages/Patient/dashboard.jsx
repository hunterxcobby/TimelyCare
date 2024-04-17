/* This example requires Tailwind CSS v2.0+ */

import ProtectedRoute from "../ProtectedRoute";
import PatientLayout from "../layouts/PatientLayout";
const faqs = [
    {
      id: 1,
      question: "Our Mission:",
      answer:
        "At the core of TimelyCare's mission is the commitment to prioritize your well-being. We understand the challenges individuals face when seeking specialist care, and we are here to change the game. Our platform empowers you to take control of your health journey by facilitating direct specialist appointments, bypassing the traditional hospital visit maze..",
    },
    {
      id: 2,
      question: "Innovation at Its Core:",
      answer:
        "TimelyCare is the product of relentless dedication and innovation. Our teams at ALX worked tirelessly to develop a service that redefines how healthcare is accessed. By leveraging cutting-edge technology and a user-centric approach, we've created a platform that simplifies the entire healthcare process..",
    },
    {
      id: 3,
      question: "Empowering Your Well-being",
      answer:
        "Your health is our priority. TimelyCare is not just a service; it's a commitment to empower individuals seeking specialist care. We believe that everyone deserves timely access to quality healthcare, and we're here to make that a reality.",
    },
  
    // More questions...
  ];
  
  export default function dashboard() {
    return (
       
        <PatientLayout>
          <h2>http://localhost:3000/Patient/dashboard</h2>
        </PatientLayout>
  
    );
  }
  