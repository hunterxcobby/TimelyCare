import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Example() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // 
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('https://appointments');
        setAppointments(response.data); // fetched appointments data in state
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments(); // Calling the fetched appointments console.log("Appointment successful:", response.data);
    // dont forget to solve child props error
  }, []); // 

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <h2 className="mt-6 text-center text-3xl font-play  font-extrabold text-gray-900">
            Your Appointments
          </h2>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
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
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 font-play  uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-play font-medium text-gray-900">
                      {appointment.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                      {appointment.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                      {appointment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-play  text-gray-500">
                      {appointment.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
