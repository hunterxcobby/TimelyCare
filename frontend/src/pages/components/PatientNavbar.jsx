import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useAuth } from "../AuthContext";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Destructure logout from useAuth
function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    
    await logout();
    router.push('/');
  };

  return (
    <button onClick={handleLogout} className="ml-8 whitespace-nowrap inline-flex  font-play items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-one hover:bg-indigo-700">
      Log Out
    </button>
  );
}
export default function PatientNavbar() {
  const { logout } = useAuth(); 
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-30">
          <div className="flex justify-start lg:w-0 lg:flex-1 text-base text-xl font-play text-two hover:text-two">
  <Link href="#">
    Timely Care
  </Link>
</div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"></div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              

              <Link
                href="/"
                className="text-base font-medium text-black font-play hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/Patient/Appointments"
                className="text-base font-medium text-black font-play hover:text-gray-900"
              >
                My appointments
              </Link>

              <Link
                href="/Patient/Appointment"
                className="text-base font-medium text-black font-play hover:text-gray-900"
              >
                Book an appointment
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    ></Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/Patient/Profile"
                className="whitespace-nowrap text-base font-play font-medium text-black hover:text-gray-900"
              >
               My Profile
              </Link>
           
              <LogoutButton/>
            </div>
           
          </div>
         
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div className="flex justify-start lg:w-0 lg:flex-1 text-base text-xl font-play text-two hover:text-two">
  <Link href="#">
    Timely Care
  </Link>
</div>
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8"></nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="/"
                    className="text-base font-medium text-gray-900 font-play hover:text-gray-700"
                  >
                    Home
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="/Patient/Appointments"
                    className="text-base font-medium text-black font-play hover:text-gray-900"
                  >
                    My appointments
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="/Patient/Appointment"
                    className="text-base font-medium text-black font-play hover:text-gray-900"
                  >
                    Book an appointment
                  </Link>
                </div>
                <div>
                  <Link
                    href="/Patient/Profile"
                    className="w-full flex items-center justify-center font-play px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-one hover:bg-indigo-700"
                  >
                    My Profile
                  </Link>
                  <div>
                    <p className="mt-6 text-center text-base font-medium font-play text-gray-500">
                      <LogoutButton/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
