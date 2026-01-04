import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-[#f3e8eb] dark:border-white/10 dark:bg-background-dark/90">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1440px] mx-auto w-full relative">
        <div className="flex items-center gap-4 text-primary">
          <Link to="/">
            <img
              src="/denvalogo.png"
              alt="DENVA Logo"
              className="h-[4.5rem] absolute left-12 top-1"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8 h-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={({ isActive }) =>
                `text-[#1b0e12] dark:text-white hover:text-primary transition-colors text-sm ${isActive ? "font-semibold text-primary" : "font-medium"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="lg:hidden">
          <button className="p-2 text-[#1b0e12] dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
