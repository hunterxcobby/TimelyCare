/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider font-play  text-two">Elevating Your Health</h2>
          <p className="mt-2 text-black text-3xl font-extrabold font-play tracking-tight sm:text-4xl">One Appointment at a Time</p>
          <p className="mt-3 text-lg font-play text-black">
          At TimelyCare, we prioritize your well-being. Our platform empowers you to take control of your health journey by facilitating direct specialist appointments, bypassing the traditional hospital visit maze
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-3   text-base font-medium rounded-md text-white bg-one font-play hover:bg-gray-300"
              >
                Get Started
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
