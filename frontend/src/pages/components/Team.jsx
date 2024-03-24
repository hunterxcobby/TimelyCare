/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
    {
      name: 'Dr. Emily Johnson, MD',
      role: 'Cardiologist',
      imageUrl:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'With over 15 years of experience in cardiology, Dr. Johnson specializes in the diagnosis and treatment of heart conditions. She is known for her compassionate approach and dedication to patient care..',
      
    },
    {
        name: 'Dr. Michael Chen, PhD',
        role: 'Psychiatrist',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Dr. Chen is a licensed psychiatrist with a focus on anxiety and depression management. He combines evidence-based treatments with a personalized approach to help his patients achieve mental wellness.',
        
      },{
        name: 'Dr. David Patel, MD',
        role: 'Orthopedic Surgeon',
        imageUrl:
          'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
bio: 'With advanced training in orthopedic surgery, Dr. Patel specializes in treating musculoskeletal injuries and conditions. His expertise includes minimally invasive procedures and sports medicine.',
        
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h2>
              <p className="text-xl text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                            <p className="text-indigo-600">{person.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-2xl lg:mx-auto lg:text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-two sm:text-4xl">
          Join us on this transformative journey as we revolutionize the
          healthcare experience. TimelyCare is your partner in prioritizing
          well-being, because your health shouldn't wait!.
        </h2>
      </div>
        </div>
      </div>
    )
  }
  