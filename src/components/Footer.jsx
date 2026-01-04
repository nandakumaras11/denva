import { Link } from "react-router-dom";
import { footerLinks, contactInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-6">
            <img src="/denvalogo.png" className="w-24" alt="Denva Logo" />
            <p className="text-white/60 text-sm leading-relaxed">
              Rooted in trust. We are redefining dental care by combining
              precision, comfort, and a patient-centered approach to create
              smiles that last a lifetime.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-1">
                  location_on
                </span>
                <p className="text-white/60 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    call
                  </span>
                  <span className="text-white/60 text-sm">
                    {contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    mail
                  </span>
                  <span className="text-white/60 text-sm">
                    {contactInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    language
                  </span>
                  <span className="text-white/60 text-sm">
                    {contactInfo.website}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} DENVA Dental Clinic. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 hover:shadow-2xl"
        href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="h-8 w-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
