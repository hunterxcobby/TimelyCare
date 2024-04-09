import axios from "axios";
export default function Example() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form data
    const formData = new FormData(event.target);
    const appointmentDetails = {
      firstname: formData.get("first_name"),
      lastname: formData.get("last_name"),
      location: formData.get("location"),
      specialist: formData.get("specialist"),
      date: formData.get("date"),
      time: formData.get("time"),
    };
  
    console.log("Appointment details:", appointmentDetails);
  
    try {
      const response = await axios.post("https://timelycare.onrender.com/user/add/appointment", appointmentDetails);
      console.log("Appointment successful:", response.data);
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
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
                  htmlFor="email"
                  className="block text-sm font-medium font-play  text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="firstname"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium font-play  text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="lastname"
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
                  Location
                </label>
                <div className="mt-1">
                  <input
                    id="location"
                    name="location"
                    type="location"
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
                  Specialist
                </label>
                <div className="mt-1">
                  <input
                    id="specialist"
                    name="specialist"
                    type="text"
                    autoComplete="current-specialist"
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
    </>
  );
}
