import React from 'react';
import { heroContent, differenceSection, features, ctaContent } from '../constants/why_us';

const WhyUs = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="layout-container max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h1 className="text-[#1b0e12] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                {heroContent.title.split(' ').map((word, index) =>
                  word === 'precision' ? <span key={index} className="text-primary">{word} </span> : word + ' '
                )}
              </h1>
              <p className="text-[#6b4c55] dark:text-[#d0c0c6] text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                {heroContent.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                  Book Consultation
                </button>
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-surface-dark border border-[#e6d1d7] dark:border-[#4a2e36] text-[#1b0e12] dark:text-white text-base font-bold hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${heroContent.imageUrl}')` }}>
              </div>
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[260px] border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-[24px]">{heroContent.floatingCard.icon}</span>
                  </div>
                  <span className="font-bold text-sm text-[#1b0e12] dark:text-white">{heroContent.floatingCard.title}</span>
                </div>
                <p className="text-xs text-[#6b4c55] dark:text-[#d0c0c6]">{heroContent.floatingCard.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Feature Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-surface-dark border-y border-[#f3e8eb] dark:border-[#2d1b22]">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b0e12] dark:text-white mb-4">{differenceSection.title}</h2>
            <p className="text-[#6b4c55] dark:text-[#d0c0c6] text-lg">{differenceSection.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 auto-rows-fr">
            {features.map((feature, index) => (
              <div key={index} className={`group relative flex flex-col justify-between p-8 rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/5 ${feature.span} ${feature.isLarge ? (feature.isReversed ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30' : 'bg-[#1b0e12] dark:bg-[#1a0f12] text-white border border-transparent hover:shadow-2xl') : 'bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20'}`}>
                {feature.isLarge ? (
                  <>
                    <div className={`absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center pointer-events-none ${feature.isReversed ? 'mix-blend-overlay opacity-60' : ''}`} style={{ backgroundImage: `url('${feature.imageUrl}')` }}></div>
                    <div className={`relative z-10 flex flex-col justify-center flex-1 ${feature.isReversed ? 'text-right md:text-left' : ''}`}>
                      <div className={`size-14 rounded-xl flex items-center justify-center text-primary mb-6 ${feature.isReversed ? 'bg-white self-end md:self-start' : 'bg-white/10 backdrop-blur-sm'}`}>
                        <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                      <p className={`${feature.isReversed ? 'text-white/90' : 'text-gray-300'} leading-relaxed text-lg`}>{feature.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
                    <div className="relative z-10">
                      <div className="size-14 rounded-xl bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1b0e12] dark:text-white mb-3">{feature.title}</h3>
                      <p className="text-[#6b4c55] dark:text-[#d0c0c6] leading-relaxed">{feature.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="layout-container max-w-5xl mx-auto px-4 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#f0ebed] dark:bg-[#3a252b] p-10 md:p-16 text-center border border-[#e6d1d7] dark:border-[#4a2e36]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-5%] w-64 h-64 rounded-full bg-primary/5"></div>
              <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 rounded-full bg-primary/5"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1b0e12] dark:text-white max-w-2xl">
                {ctaContent.title}
              </h2>
              <p className="text-[#6b4c55] dark:text-[#d0c0c6] text-lg max-w-xl">
                {ctaContent.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all w-full sm:w-auto">
                  Book Your Visit
                </button>
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-transparent border border-primary/20 text-primary dark:text-primary-light font-bold hover:bg-primary/5 transition-all w-full sm:w-auto">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUs;
