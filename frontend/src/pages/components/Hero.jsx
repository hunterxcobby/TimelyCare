import React from "react";

export default function HeroSection() {
  return (
    <div
      className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Elevating Your Health,
          <br />
          One Appointment at a Time
        </h1>
        <p className="mt-6 text-xl text-white">
          At TimelyCare, we prioritize your well-being. Our platform empowers you to take control of your health journey by facilitating direct specialist appointments, bypassing the traditional hospital visit maze.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-two py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-600"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}