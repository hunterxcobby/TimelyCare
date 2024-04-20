import Link from "next/link"

  export default function Example() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold font-play font-play text-two text-center">
          About Us
        </h2>
        <div className="mt-12">
          <p className="text-lg font-play text-gray-500">
            TimelyCare was born out of a personal need for efficient and accessible healthcare solutions. Our journey began with a shared frustration towards the traditional healthcare system's complexities and inefficiencies. We envisioned a platform that would empower individuals to take control of their health journey by providing direct access to specialist care without the hassle of lengthy appointment processes.
            <br /><br />
            As a Portfolio Project for Holberton School, TimelyCare represents our commitment to innovation and our passion for making a positive impact on people's lives. We embarked on this journey with the goal of revolutionizing the healthcare industry and ensuring that everyone has timely access to quality healthcare services.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-bold font-play mb-2">Meet Our Team:</h3>
          <h1 className="text-l font-bold font-play mb-1">Solomon Cobby Sefah</h1>
          <ul className="grid grid-cols-1 gap-4 font-play sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
              <Link href="https://www.linkedin.com/in/hunterxcobby" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline">LinkedIn</Link> | 
              <Link href="https://github.com/hunterxcobby" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> GitHub</Link> | 
              <Link href="https://x.com/hunterxcobby?t=3tVeQUiyQR7pqVKzbj9wqg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> Twitter</Link>
            </li>
          
          </ul>
        </div>
        <div className="mt-12">
          
          <h1 className="text-l font-bold font-play mb-1">Abdirahman Abdi</h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <Link href="https://www.linkedin.com/in/abdirahman-abdi-7ab9ba240/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline">LinkedIn</Link> | 
              <Link href="https://github.com/abdirahmanmohamedabdi" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> GitHub</Link> | 
              <Link href="https://twitter.com/Abdirahman_m_a" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> Twitter</Link>
            </li>
            
          </ul>
        </div>
        <div className="mt-12">
          
          <h1 className="text-l font-bold font-play mb-1">Adebayo Ifeoluwa</h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <Link href="https://www.linkedin.com/in/techlord5" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline">LinkedIn</Link> | 
              <Link href="https://github.com/TechLord05" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> GitHub</Link> | 
              <Link href="https://x.com/_Techlord?t=3tVeQUiyQR7pqVKzbj9wqg&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-play hover:underline"> Twitter</Link>
            </li>
          
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://github.com/hunterxcobby/TimelyCare" target="_blank" rel="noopener noreferrer" className="inline-block bg-one py-2 px-4 border border-transparent rounded-md text-base font-play font-medium text-white hover:bg-indigo-700">
            View GitHub Repository
          </Link>
        </div>
      </div>
    </div>
    )
  }
  