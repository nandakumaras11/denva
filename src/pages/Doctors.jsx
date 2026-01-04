import React from "react";
import { doctors } from "../constants/doctors";

const Doctors = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 antialiased overflow-x-hidden transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Main Content */}
        <main className="layout-container flex flex-col items-center w-full flex-1">
          {/* Page Heading */}
          <div className="w-full max-w-[960px] px-4 md:px-0 py-10 md:py-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Meet Our Experts at DENVA
              </h1>
              <p className="text-text-secondary dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                World-class dentistry combined with compassion and precision.
                Our team represents the perfect blend of expertise and empathy.
              </p>
            </div>
          </div>

          {/* Doctor Profiles Container */}
          <div className="w-full max-w-[960px] px-4 md:px-0 flex flex-col gap-12 pb-20">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-[#e6d1d7] dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6 md:p-8 flex flex-col gap-8">
                  {/* Header Section */}
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-8 items-start`}
                  >
                    <div className="shrink-0">
                      <div
                        className="bg-top bg-no-repeat bg-cover rounded-xl w-32 h-32 md:w-40 md:h-40 shadow-inner bg-gray-200"
                        style={{ backgroundImage: `url("${doctor.image}")` }}
                        data-alt={`Portrait of ${doctor.name}`}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div>
                        <h2 className="text-text-main dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                          {doctor.name}
                        </h2>
                        <p className="text-primary font-medium text-sm mt-1 uppercase tracking-wider">
                          {doctor.specialty}
                        </p>
                      </div>
                      <p className="text-text-secondary dark:text-gray-300 text-sm font-medium leading-normal border-b border-[#e6d1d7] dark:border-gray-600 pb-3">
                        {doctor.qualifications}
                      </p>
                      <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-relaxed">
                        {doctor.description}
                      </p>
                    </div>
                  </div>

                  {/* Expertise List (Grid) */}
                  <div className="bg-[#fbf8f9] dark:bg-gray-900/50 rounded-xl p-6">
                    <h3 className="text-text-main dark:text-white text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        verified
                      </span>
                      Areas of Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {doctor.expertise.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col gap-1 border-l-2 border-primary/20 pl-3"
                        >
                          <p className="text-text-secondary dark:text-gray-400 text-xs uppercase font-semibold">
                            {item.area}
                          </p>
                          <p className="text-text-main dark:text-gray-200 text-sm font-medium">
                            {item.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex justify-end">
                    <button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-all shadow-md">
                      <span>
                        Book Appointment with {doctor.name.split(" ")[1]}
                      </span>
                      <span className="material-symbols-outlined text-lg">
                        calendar_month
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Doctors;
