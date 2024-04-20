import React from 'react';
import { useAuth } from '../AuthContext';
import SpecialistNavbar from '../components/SpecialistNavbar';
import Footer from '../components/Footer';
import Homepage from '../Homepage';

function SpecialistLayout({ children }) {
  const { userType } = useAuth();

  return (
    <div>
     <SpecialistNavbar/>
     {children}
    </div>
  );
}

export default SpecialistLayout;