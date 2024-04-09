import axios from "axios";

export default function Example() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const signUpDetails = {
      firstname: formData.get("first_name"),
      lastname: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phonenumber: formData.get("phone_number"),
      usertype: formData.get("user_type"),
      gender: formData.get("gender"),
      dateofbirth: formData.get("date_of_birth"),
    };

    try {
      const response = await axios.post(
        "https://timelycare.onrender.com/user/add",
        signUpDetails
      );
      console.log("Sign-up successful:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error signing up:", error);
      console.log("Sign-up details:", signUpDetails);
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
                  <option value="male">Male</option>
                  <option value="female">Female</option>
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
                  name="phone"
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
    </>
  );
}
