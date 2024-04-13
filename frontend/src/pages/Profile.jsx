/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium font-play text-gray-900">User Information</h3>
        
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium font-play text-gray-500">Full names</dt>
            <dd className="mt-1 text-sm font-play text-gray-900">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium font-play text-gray-500">Country</dt>
            <dd className="mt-1 text-sm font-play text-gray-900">Kenya</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-play font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm font-play text-gray-900">margotfoster@example.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium font-play text-gray-500">Next Appointment</dt>
            <dd className="mt-1 text-sm font-play text-gray-900">12/02/2025  23:00</dd>
          </div>
         
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium font-play text-gray-500">Recent Symptoms</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 font-play w-0 truncate">21/03/2024</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium font-play text-two hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 font-play flex-1 w-0 truncate">21/03/2024</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-two font-play hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PaperClipIcon } from '@heroicons/react/solid';

// export default function Profile() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // const response = await axios.get('/api/user/profile'); // Assuming you have an endpoint to fetch user data
//         setUserData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//       <div className="px-4 py-5 sm:px-6">
//         <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
//         <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and recent symptoms.</p>
//       </div>
//       <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
//         <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
//           <div className="sm:col-span-1">
//             <dt className="text-sm font-medium text-gray-500">Full name</dt>
//             <dd className="mt-1 text-sm text-gray-900">{userData.firstName} {userData.lastName}</dd>
//           </div>
//           <div className="sm:col-span-1">
//             <dt className="text-sm font-medium text-gray-500">Email address</dt>
//             <dd className="mt-1 text-sm text-gray-900">{userData.email}</dd>
//           </div>
//           <div className="sm:col-span-1">
//             <dt className="text-sm font-medium text-gray-500">Phone number</dt>
//             <dd className="mt-1 text-sm text-gray-900">{userData.phoneNumber}</dd>
//           </div>
//           <div className="sm:col-span-1">
//             <dt className="text-sm font-medium text-gray-500">Location</dt>
//             <dd className="mt-1 text-sm text-gray-900">{userData.location}</dd>
//           </div>
//           <div className="sm:col-span-2">
//             <dt className="text-sm font-medium text-gray-500">Recent Symptoms</dt>
//             <dd className="mt-1 text-sm text-gray-900">{userData.recentSymptoms}</dd>
//           </div>
//         </dl>
//       </div>
//     </div>
//   );
// }
