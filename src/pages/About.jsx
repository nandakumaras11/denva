import { aboutHero, experts, purpose, cta } from "../constants/about";

const About = () => {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-12 lg:py-20">
        <div className="@container">
          <div className="flex flex-col gap-10 lg:flex-row items-center lg:gap-16">
            <div className="flex flex-col gap-6 flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light w-fit">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  {aboutHero.tag}
                </span>
              </div>
              <h1
                className="text-text-dark dark:text-white text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight"
                dangerouslySetInnerHTML={{
                  __html: aboutHero.title.replace(
                    "Comfort & Trust",
                    '<span class="text-primary">Comfort & Trust</span>',
                  ),
                }}
              ></h1>
              <div className="space-y-4 text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                {aboutHero.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                  data-alt={aboutHero.image.alt}
                  style={{ backgroundImage: `url('${aboutHero.image.url}')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="w-full bg-white dark:bg-background-dark py-16 lg:py-24 border-y border-gray-100 dark:border-gray-800">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 w-full lg:max-w-[500px]">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 rounded-xl overflow-hidden bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    data-alt={experts.images[0].alt}
                    style={{
                      backgroundImage: `url('${experts.images[0].url}')`,
                    }}
                  ></div>
                </div>
                <div className="h-64 rounded-xl overflow-hidden bg-gray-200 mt-8">
                  <div
                    className="w-full h-full bg-cover bg-top"
                    data-alt={experts.images[1].alt}
                    style={{
                      backgroundImage: `url('${experts.images[1].url}')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-text-dark dark:text-white text-3xl font-bold tracking-tight">
                {experts.title}
              </h2>
              <p
                className="text-text-muted dark:text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: experts.paragraphs[0]
                    .replace(
                      "Dr. Afzal Khadir T.",
                      '<strong class="text-text-dark dark:text-white">Dr. Afzal Khadir T.</strong>',
                    )
                    .replace(
                      "Dr. Faraz Afzal T.",
                      '<strong class="text-text-dark dark:text-white">Dr. Faraz Afzal T.</strong>',
                    ),
                }}
              ></p>
              <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                {experts.paragraphs[1]}
              </p>
              <div className="pt-4">
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Meet Our Team{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="w-full max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="text-text-dark dark:text-white text-3xl lg:text-4xl font-extrabold tracking-tight">
              {purpose.title}
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg">
              {purpose.paragraph}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {purpose.cards.map((card, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 dark:bg-primary/10 py-20">
        <div className="layout-container flex justify-center px-6">
          <div className="max-w-[800px] text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-dark dark:text-white">
              {cta.title}
            </h2>
            <p className="text-text-muted dark:text-gray-300 text-lg">
              {cta.paragraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-lg shadow-lg transition-all">
                Book Appointment
              </button>
              <button className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-600 hover:border-primary text-text-dark dark:text-white font-bold h-12 px-8 rounded-lg transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
