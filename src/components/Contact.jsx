import { contactInfo } from "../constants";

const Contact = () => {
    return (
        <section id="contact-us" className="w-full py-16 md:py-24 bg-white dark:bg-[#2a161c]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    <div className="flex flex-col justify-center gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">
                                Get in Touch
                            </span>
                            <h2 className="text-[#1b0e12] dark:text-white text-4xl font-extrabold leading-tight">
                                Visit Our Clinic
                            </h2>
                            <p className="text-[#1b0e12]/70 dark:text-white/70 mt-2">
                                We look forward to welcoming you to DENVA.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-[#1b0e12] dark:text-white font-bold mb-1">
                                        Address
                                    </h4>
                                    <p className="text-[#1b0e12]/70 dark:text-white/70 text-sm leading-relaxed max-w-sm">
                                        {contactInfo.address}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="text-[#1b0e12] dark:text-white font-bold mb-1">
                                        Phone
                                    </h4>
                                    <p className="text-[#1b0e12]/70 dark:text-white/70 text-sm">
                                        {contactInfo.phone}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-[#1b0e12] dark:text-white font-bold mb-1">
                                        Online
                                    </h4>
                                    <p className="text-[#1b0e12]/70 dark:text-white/70 text-sm">
                                        {contactInfo.email}
                                    </p>
                                    <p className="text-[#1b0e12]/70 dark:text-white/70 text-sm">
                                        {contactInfo.website}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                                            <div className="w-full h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-[#e6d1d7] dark:border-primary/20 relative bg-gray-100 dark:bg-gray-800">
                                                <img
                                                    alt={contactInfo.mapAlt}
                                                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                                                    data-location="Aluva, Kerala"
                                                    src={contactInfo.mapImage}
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <a
                                                        href="https://maps.app.goo.gl/SoRzhvXUPXoEWu7Z9"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-primary/20 flex items-center gap-2 cursor-pointer"
                                                    >
                                                        <span className="material-symbols-outlined text-primary">near_me</span>
                                                        <span className="font-bold text-sm text-[#1b0e12]">
                                                            Locate Us on Map
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>                </div>
            </div>
        </section>
    );
};

export default Contact;
