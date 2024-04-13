// api/login.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    const { email, password } = req.body;
  
    try {
      // Example: Check if email and password match a user in the database
      if (email === "example@example.com" && password === "password") {
        // Return a success response if credentials match
        return res.status(200).json({ message: "Login successful" });
      } else {
        // Return a failure response if credentials do not match
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Return an error response
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  