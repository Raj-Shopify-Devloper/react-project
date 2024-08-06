import header_logo from "../assets/page-fly.png";
import search_icon from "../assets/images.png";
import { useState } from "react";
var items = ["Home", " About", "Contact US", "products"];
function Header() {
  const [colorIndex, setColor] = useState(-1);
  return (
    <div className="header-menu">
      <div className="header-logo">
        <img src={header_logo} className="header-logo-image" />
      </div>
      <ul className="header-menu">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              colorIndex === index
                ? "header-menu-item active"
                : "header-menu-item "
            }
          >
            <a
              className="menu-button"
              onClick={() => {
                setColor(index), console.log("selected");
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="header-search">
        <input type="text" placeholder="Search Name" />
        <img src={search_icon} className="header-search-icon" />
      </div>
    </div>
  );
}
export default Header;
