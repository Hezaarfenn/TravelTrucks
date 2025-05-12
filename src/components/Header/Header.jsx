import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/TravelTrucksLogo.svg";

const Navigation = () => {
  return (
    <div className="flex flex-1/2 p-6 pl-20 bg-[#F7F7F7]">
      <Link to="/" className="flex w-1/2">
        <img width="136px" height="15px" src={logo} alt="logo" />
      </Link>

      <div className="flex w-1/2">
        <ul className="flex gap-8 text-[#101828] font-medium text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#D84343]" : "text-[#101828]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? "text-[#D84343]" : "text-[#101828]"
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
