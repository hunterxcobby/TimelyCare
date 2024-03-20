/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <div className="relative ">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-two">
            Timely Care
          </h2>
          <p className="mt-2 text-two text-3xl font-extrabold tracking-tight sm:text-4xl">
            Elevating your health, one appointment at a time
          </p>
          <p className="mt-3 text-lg text-two">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-one hover:bg-gray-50"
              >
                Learn More
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
