import { heroBanners, visionMission, treatments } from "../constants";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <main className="flex-1">
            <section className="relative w-full">
                <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6">
                    <div className="relative w-full h-[560px] rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center gap-8 pointer-events-none p-4">
                            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em] drop-shadow-sm max-w-[720px]">
                                {heroBanners[0].title}
                            </h1>
                            <button className="pointer-events-auto flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                <span className="truncate">Book an Appointment</span>
                            </button>
                        </div>
                        <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                            {heroBanners.map((banner, index) => (
                                <div
                                    key={index}
                                    className="w-full h-full flex-shrink-0 snap-center bg-cover bg-center"
                                    style={{
                                        backgroundImage: banner.imageUrl,
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col gap-10 text-center items-center">
                    <h2 className="text-[#1b0e12] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-[800px]">
                        Experience Dentistry Redefined
                    </h2>
                    <p className="text-[#1b0e12]/80 dark:text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-[800px]">
                        At DENVA, we believe that dental care should be as much about comfort and trust as it is about precision. From the very beginning, our vision has been to redefine how people experience dentistry — making it gentler, more advanced, and deeply patient-focused. Every aspect of our clinic, from design to technology, reflects that promise.
                    </p>
                    <button className="inline-flex items-center justify-center rounded-lg h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-base font-bold">
                        Learn More
                    </button>
                </div>
            </section>

            <section className="w-full py-16 bg-white dark:bg-[#2a161c]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col gap-12">
                        <h2 className="text-[#1b0e12] dark:text-white text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                            Our Vision | Our Mission
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {visionMission.map((item, index) => (
                                <div key={index} className="flex flex-col gap-6 rounded-xl border border-[#e6d1d7] dark:border-primary/20 bg-background-light dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-[#1b0e12] dark:text-white text-2xl font-bold leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#1b0e12]/70 dark:text-white/70 text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-background-light dark:bg-background-dark overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col gap-10">
                    <div className="flex items-end justify-between">
                        <h2 className="text-[#1b0e12] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                            Our Treatments
                        </h2>
                        <div className="hidden md:flex gap-2">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Scroll to explore
                            </span>
                            <span className="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                        {treatments.map((treatment, index) => (
                            <div key={index} className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    data-alt={treatment.alt}
                                    style={{ backgroundImage: treatment.imageUrl }}
                                ></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2">
                                    <span className="inline-block px-3 py-1 bg-primary text-white text-xl font-bold rounded-full w-fit mb-2">
                                        {treatment.category}
                                    </span>
                                    <h3 className="text-white text-2xl font-bold">
                                        {treatment.title}
                                    </h3>
                                    <p className="text-white/90 text-sm md:text-base">
                                        {treatment.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default Home;