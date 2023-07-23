import applogo from "../../images/applogo.jpg";
import { useState } from "react";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img className="image" src={applogo} />
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
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
