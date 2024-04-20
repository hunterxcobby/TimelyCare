import React from 'react';
import { useAuth } from './AuthContext';
import Navbar from './components/Navbar';
import PatientNavbar from './components/PatientNavbar';
import SpecialistNavbar from './components/SpecialistNavbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Example from './About';
import Team from './components/Team';
import { useState,useEffect } from 'react';
import FeatureSection from './components/features';

export default function Homepage() {
  const { userType } = useAuth();
const [isloaded, setisloaded] = useState(false);
useEffect(() => {
  setisloaded(true);
}, []);
  return (
    <div>
      {/* {userType === 'Specialist' && <SpecialistNavbar />}
      {userType === 'Patient' && <PatientNavbar />} */}
      {userType !== 'Specialist' && userType !== 'Patient' && <Navbar />}
      <Hero/>
      <FeatureSection/>
      <Team/>
      {/* <Footer /> */}
    </div>
  );
}