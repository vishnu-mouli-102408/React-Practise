import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img className="image" src="https://cdna.artstation.com/p/assets/images/images/023/767/398/large/solohive-technology-jawx-hussain-square-11.jpg?1580280648" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
      <div>
        {isLoggedin ? (
          <button onClick={() => setIsLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
