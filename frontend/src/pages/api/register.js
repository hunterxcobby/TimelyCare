// api/register.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    const {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      user_type,
      gender,
      date_of_birth,
    } = req.body;
  
    try {
      // Handle registration logic here
      // Example: Save user data to database, validate inputs, etc.
      
      // Return a success response
      return res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Registration failed:", error);
      // Return an error response
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  