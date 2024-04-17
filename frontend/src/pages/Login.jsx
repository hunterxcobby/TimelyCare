import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";

import { Fragment } from "react";

import { AuthProvider } from "./Patient/AuthContext";

import { useState } from "react";

import axios from "axios";
import { useAuth } from "./AuthContext";

export default function LoginPage() {
  const [showError, setShowError] = useState(false);
  const { login } = useAuth();

  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const logInDetails = {
      email: formData.get("email"),
      password: formData.get("password"),
      user_type: formData.get("user_type"),
    };

    try {
      const response = await axios.post(
        "https://timelycare.onrender.com/profiles/login/",
        logInDetails
      );

      console.log("Response Data:", response.data); // Debugging

      // Check if the response contains a message indicating a redirection
      const redirectMessage = response.data.message;
      if (
        redirectMessage &&
        redirectMessage.toLowerCase().includes("patient")
      ) {
        // Perform login action
        login();

        // Redirect to the patient dashboard
        router.push("/Patient/dashboard");
        return; // Exit the function to prevent further execution
      }

      // Assuming the server response includes the user type
      const userType = response.data.user_type;
      console.log("User Type:", userType); // Debugging

      // Perform login action
      login();

      // Navigate to the appropriate page based on user type
      if (userType === "Specialist") {
        router.push("/specialist/dashboard");
      } else if (userType === "Patient") {
        router.push("/patient/dashboard");
      } else {
        // Handle unknown user type
      }
    } catch (error) {
      console.error("Error log in:", error);
      setShowError(true);
    }
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-play font-extrabold text-gray-900">
            Log In as a Specialist
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
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent font-play rounded-md stext-sm font-medium text-white bg-one hover:bg-indigo-700 "
                >
                  Log In
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
                        Log in successful!
                      </p>
                      <p className="mt-1 text-sm font-play  text-gray-500">
                        Success.
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
