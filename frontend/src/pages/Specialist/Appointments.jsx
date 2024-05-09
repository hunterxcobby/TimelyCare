import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import SpecialistLayout from '../layouts/SpecialistLayout';
export default function Appointments() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let appointmentIds = [];

 
  if (typeof window !== 'undefined') {
    appointmentIds = JSON.parse(localStorage.getItem('appointmentIds')) || [];
    console.log('Found appointment IDs:', appointmentIds);
  }
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const responses = await Promise.all(appointmentIds.map(id => 
          axios.get(`https://WecareTimely.onrender.com/appointments/appointments/${id}`)
        ));
        setAppointments(responses.map(response => response.data));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // // Check if appointments data is available
  // if (!appointments) {
  //   return <div>Appointments data not found</div>;
  // }

  return (
    <SpecialistLayout>
    {appointments.map((appointment, index) => (
      <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium font-play text-gray-900">Appointment Details</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
              <dt className="text-sm font-playfont-medium text-gray-500">User Name</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">Abdirahman</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-playfont-medium text-gray-500">Symptom Type</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">{appointment.symptom_type}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium font-play text-gray-500">Symptom Description</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">{appointment.symptom_description}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium font-play text-gray-500">Appointment Date</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">{appointment.date}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium font-play text-gray-500">Appointment Time</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">{appointment.time}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium font-play text-gray-500">Appointment Status</dt>
              <dd className="mt-1 text-sm font-play text-gray-900">{appointment.status}</dd>
            </div>
          </dl>
        </div>
      </div>
    ))}
  </SpecialistLayout>
  );
}
