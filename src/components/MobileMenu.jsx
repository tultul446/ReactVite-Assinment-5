import { useState } from "react";
import { TfiAlignJustify, TfiClose  } from "react-icons/tfi";
import { NavLink } from "react-router";
import { SelectItems } from "../lib/db";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section>
      <div>
        {/* Top Bar with Hamburger */}
        <div className="md:hidden max-w-7xl mx-auto px-2 flex items-center mb-5 ">
          <div className="md:hidden  mr-4">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <TfiClose  size={35} /> : <TfiAlignJustify size={39} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-wrap bg-gray-200 shadow-lg space-y-4 ml-3 mr-3 px-7 py-4">
            <div className="w-full h-[2px] bg-gray-100"></div>
            <ul className="space-y-3">
              {SelectItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm ${
                        isActive ? "text-blue-800" : "text-gray-500"
                      } flex flex-col items-center`
                    }
                  >
                    <img src={item.icon} alt={item.label} className="w-4" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileMenu;
