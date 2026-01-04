import React from 'react';
import { heroContent, treatmentCategories, advancedCare, ctaContent } from '../constants/treatments';

const Treatments = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e12] font-display antialiased">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-[#fbf8f9] dark:bg-[#211116]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-[#211116]/90 dark:to-transparent z-10 pointer-events-none"></div>
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-10 md:py-24">
          <div className="relative z-20 flex flex-1 flex-col gap-6 text-left">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#1b0e12] dark:text-white md:text-5xl lg:text-6xl">
              {heroContent.title.split(' ').map((word, index) => 
                word === 'Dental' || word === 'Solutions' ? <span key={index} className="text-primary">{word} </span> : word + ' '
              )}
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:max-w-xl">
              {heroContent.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-[#a61740] shadow-lg shadow-primary/20">
                Explore Treatments
              </button>
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-[#1b0e12] transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-[#2d1b22] dark:text-white dark:hover:bg-[#3a222a]">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 justify-center md:justify-end">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-10 right-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${heroContent.imageUrl}")` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Treatments Grid */}
      <div className="bg-white py-20 dark:bg-[#1a0d11]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="text-3xl font-bold leading-tight text-[#1b0e12] dark:text-white md:text-4xl">Specialized Dental Care</h2>
            <p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-400">We provide a wide range of specialized treatments to ensure your smile is healthy and beautiful.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {treatmentCategories.map((category, index) => (
              <div key={index} className="group flex flex-col rounded-2xl border border-gray-100 bg-[#fbf8f9] p-6 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 dark:border-[#3a2028] dark:bg-[#211116] dark:hover:border-primary/40">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#1b0e12] dark:text-white">{category.title}</h3>
                <ul className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">check_circle</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Advanced & Preventive Care */}
            <div className="group flex flex-col rounded-2xl border border-gray-100 bg-[#fbf8f9] p-6 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 dark:border-[#3a2028] dark:bg-[#211116] dark:hover:border-primary/40 md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{advancedCare.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-[#1b0e12] dark:text-white">{advancedCare.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {advancedCare.services.map((service, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined mt-0.5 text-base text-primary">check_circle</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full bg-[#fbf8f9] dark:bg-[#211116] py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 md:px-16 md:py-20 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="max-w-[800px] text-3xl font-black leading-tight text-white md:text-5xl">
                {ctaContent.title}
              </h2>
              <p className="max-w-[600px] text-lg font-medium text-white/90">
                {ctaContent.description}
              </p>
              <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
                <button className="flex h-12 min-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-primary transition-all hover:bg-gray-100 shadow-lg">
                  Schedule Appointment
                </button>
                <button className="flex h-12 min-w-[200px] cursor-pointer items-center justify-center rounded-lg border border-white/30 bg-primary px-8 text-base font-bold text-white transition-all hover:bg-white/10">
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
