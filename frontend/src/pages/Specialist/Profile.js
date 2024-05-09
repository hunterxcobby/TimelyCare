import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import SpecialistLayout from "../layouts/SpecialistLayout";
export default function Profile() {
  const { user } = useAuth();
  const { userId } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("User ID in Profile:", userId); // Log the userId
  useEffect(() => {
    if (userId) {
      console.log("User ID:", userId); // Log the user's ID

      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://WecareTimely.onrender.com/specialist/${userId}/`
          );
        //   console.log("User Data:", response.data); // Log the user data
          setUserData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          setError(error);
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [userId]);


  return (
    <SpecialistLayout>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium font-play  text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm font-play  text-gray-500">
            Here are you personal details.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            {userData ? (
              <>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play  text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.first_name} {userData.user.last_name}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play  text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.email}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play  text-gray-500">
                    Gender
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.gender}
                  </dd>
                </div>

                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play  text-gray-500">
                    Country
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.country}
                  </dd>
                </div>

                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play  text-gray-500">
                    City
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.city}
                  </dd>
                </div>

                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play   text-gray-500">
                    Date of birth
                  </dt>
                  <dd className="mt-1 text-sm font-play  text-gray-900">
                    {userData.user.date_of_birth}
                  </dd>
                </div>

                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play text-gray-500">
                    User Type
                  </dt>
                  <dd className="mt-1 text-sm font-play text-gray-900">
                    {userData.user.user_type}
                  </dd>
                </div>

                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium font-play text-gray-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm font-play text-gray-900">
                    {userData.user.street_address}
                  </dd>
                </div>
            
              </>
            ) : (
              <div>Loading user data...</div>
            )}
          </dl>
        </div>
      </div>
    </SpecialistLayout>
  );
}
