import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/router";
import PatientLayout from "../layouts/PatientLayout";
import { useEffect } from "react";
export default function Appointment() {
  const router = useRouter(); 
  const [appointmentIds, setAppointmentIds] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const storedIds = localStorage.getItem('appointmentIds');
    if (storedIds) {
      setAppointmentIds(JSON.parse(storedIds));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const appointmentDetails = {
      specialist: formData.get("specialist"),
      patient: formData.get("patient"),
      time: formData.get("time"),
      date: formData.get("date"),
      symptom_type: formData.get("symptom_type"),
      symptom_description: formData.get("symptom_description"),
    };

    try {
      const response = await axios.post(
        "https://WecareTimely.onrender.com/appointments/appointments/create/",
        appointmentDetails
      );

      console.log("Appointment successful:", response.data);

      const newAppointmentId = response.data.appointment_id;
      const newAppointmentIds = [...appointmentIds, newAppointmentId];
      setAppointmentIds(newAppointmentIds);
    
      localStorage.setItem('appointmentIds', JSON.stringify(newAppointmentIds));

      router.push('/Patient/Appointments');
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };
  return (
    <PatientLayout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-play  font-extrabold text-gray-900">
            Book an appointment
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
          <label
            htmlFor="patient"
            className="block text-sm font-medium font-play  text-gray-700"
          >
          
          </label>
          <div className="mt-1">
  <input
    id="patient"
    name="patient"
    type="hidden"
    required
    value={userId}
    readOnly 
  />
</div>
        </div>
        <div>
                <label
                  htmlFor="specialist"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Specialist
                </label>

                <select
                  id="specialist"
                  name="specialist"
                  className="input-field block w-full px-2 py-2 border border-gray-300 rounded-md font-play shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select a specialist</option>
                  <option value="4">Dermatology</option>
                  <option value="5">Neurology</option>
                  <option value="7">General Surgery</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium font-play  text-gray-700"
                >
                  Symptom
                </label>
                <div className="mt-1">
                  <input
                    id="symptom_type"
                    name="symptom_type"
                    type="text"
                    autoComplete="current-location"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium font-play  text-gray-700"
                >
                  Symptom Description
                </label>
                <div className="mt-1">
                  <input
                    id="symptom_description"
                    name="symptom_description"
                    type="text"
                    autoComplete="current-location"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date_of_birth"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="time_of_birth"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Time
                </label>

                <input
                  id="time"
                  name="time"
                  type="time"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border font-play border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-one hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}

