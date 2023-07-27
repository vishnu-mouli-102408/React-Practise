import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="flex justify-between bg-gray-200 p-2 shadow-md">
      <img
        className="w-16 h-16"
        src="https://cdna.artstation.com/p/assets/images/images/023/767/398/large/solohive-technology-jawx-hussain-square-11.jpg?1580280648"
      />
      <div className="nav-items">
        <ul className="flex py-3 font-sans font-medium text-lg">
          <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          {/* <li className="p-3 hover:text-xl hover:bg-blue-200 rounded-full">
            <a href="#">{user.name}</a>
          </li> */}
        </ul>
      </div>
      <div className="px-3 py-1 m-4 h-10 font-sans font-medium text-lg hover:text-xl hover:bg-red-300 rounded-full">
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
