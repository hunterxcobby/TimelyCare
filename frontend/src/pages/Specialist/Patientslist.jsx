import { useState, useEffect } from "react";
import axios from "axios";
import SpecialistLayout from "../layouts/SpecialistLayout";
export default function Example() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://timelycare.onrender.com/patient"
        );
        console.log("Patients Data:", response.data);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <SpecialistLayout>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <h2 className="mt-6 text-center text-3xl font-play text-gray-900">
              Patients list
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium font-play  text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                    >
                      Phone Number
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                    >
                      Appointment Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-play font-medium text-gray-900">
                        {patient.user.first_name} {patient.user.first_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                        {patient.user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                        {patient.user.phone_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                        {patient.user.country} {patient.user.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                        Pending
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SpecialistLayout>
  );
}
