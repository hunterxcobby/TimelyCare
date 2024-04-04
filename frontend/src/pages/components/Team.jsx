

  export default function Example() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-two text-center">
          About Us
        </h2>
        <div className="mt-12">
          <p className="text-lg text-gray-500">
            TimelyCare was born out of a personal need for efficient and accessible healthcare solutions. Our journey began with a shared frustration towards the traditional healthcare system's complexities and inefficiencies. We envisioned a platform that would empower individuals to take control of their health journey by providing direct access to specialist care without the hassle of lengthy appointment processes.
            <br /><br />
            As a Portfolio Project for Holberton School, TimelyCare represents our commitment to innovation and our passion for making a positive impact on people's lives. We embarked on this journey with the goal of revolutionizing the healthcare industry and ensuring that everyone has timely access to quality healthcare services.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-2">Meet Our Team:</h3>
          <h1 className="text-l font-bold mb-1">Solomon Cobby Sefah</h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <a href="LINK_TO_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="text-two hover:underline">LinkedIn</a>
             
              <a href="LINK_TO_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> GitHub</a> | 
              <a href="LINK_TO_TWITTER_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Twitter</a>
            </li>
            {/* Repeat the above list item for each team member */}
          </ul>
        </div>
        <div className="mt-12">
          
          <h1 className="text-l font-bold mb-1">Abdirahman</h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <a href="LINK_TO_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> | 
              <a href="LINK_TO_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> GitHub</a> | 
              <a href="LINK_TO_TWITTER_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Twitter</a>
            </li>
            {/* Repeat the above list item for each team member */}
          </ul>
        </div>
        <div className="mt-12">
          
          <h1 className="text-l font-bold mb-1">Adebayo Ifeoluwa</h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <a href="LINK_TO_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> | 
              <a href="LINK_TO_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> GitHub</a> | 
              <a href="LINK_TO_TWITTER_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Twitter</a>
            </li>
            {/* Repeat the above list item for each team member */}
          </ul>
        </div>
        <div className="mt-8 text-center">
          <a href="LINK_TO_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="inline-block bg-one py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700">
            View GitHub Repository
          </a>
        </div>
      </div>
    </div>
    )
  }
  