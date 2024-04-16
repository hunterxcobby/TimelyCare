import { useState } from "react";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { Fragment } from "react";
export default function SignUpPage() {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter(); // Use Next.js router

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const signUpDetails = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone_number: formData.get("phone_number"),
      country: formData.get("country"),
      street_address: formData.get("street_address"),
      city: formData.get("city"),
      user_type: formData.get("user_type"),
      gender: formData.get("gender"),
      date_of_birth: formData.get("date_of_birth"),
    };

    try {
      const response = await axios.post(
        "https://timelycare.onrender.com/user/add/",
        signUpDetails
      );

      setShowSuccess(true);
      setShowError(false);

     
      router.push("/Login");

      console.log("Sign-up successful:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
      setShowError(true);
    }
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-play font-extrabold text-gray-900">
            Sign up as a Specialist
            <a
              href="/Signup2"
              className="font-medium text-one hover:text-two"
            ></a>
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/Signup2"
              className="font-medium text-one font-play hover:text-two"
            >
              patient
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Address
                </label>
                <input
                  id="street_address"
                  name="street_address"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Gender
                </label>

                <select
                  id="gender"
                  name="gender"
                  className="input-field block w-full px-2 py-2 border border-gray-300  font-play rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  pattern="[0-9]*"
                  className="input-field block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_type"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  User Type
                </label>

                <select
                  id="user_type"
                  name="user_type"
                  className="input-field block w-full px-2 py-2 border border-gray-300 rounded-md font-play shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select user type</option>
                  <option value="Specialist">Specialist</option>
                  <option value="Patient">Patient</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date_of_birth"
                  className="block text-sm font-medium font-play text-gray-700"
                >
                  Date of birth
                </label>

                <input
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  className="input-field appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent font-play rounded-md stext-sm font-medium text-white bg-one hover:bg-indigo-700 "
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Error notification */}
      <div
        aria-live="assertive"
        className={`fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start ${
          showError ? "" : "hidden"
        }`}
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={showError}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ExclamationCircleIcon
                      className="h-6 w-6 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium font-play  text-gray-900">
                      Error signing up!
                    </p>
                    <p className="mt-1 text-sm font-play  text-gray-500">
                      Please try again.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setShowError(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div
          aria-live="assertive"
          className={`fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start ${
            showSuccess ? "" : "hidden"
          }`}
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <Transition
              show={showSuccess}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium font-play  text-gray-900">
                        Sign-up successful!
                      </p>
                      <p className="mt-1 text-sm font-play  text-gray-500">
                        You can now login with your credentials.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setShowSuccess(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
}
