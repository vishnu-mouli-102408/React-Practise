import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import applogo from "./images/applogo.jpg";

const heading1 = React.createElement(
  "h1",
  { id: "title", key: "1" },
  "Hello Mouli"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "2" },
  "Hello Dinesh"
);
const heading3 = React.createElement(
  "h3",
  { id: "title", key: "3" },
  "Hello Harika"
);

const div = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

// Creating the same element using JSX

const div1 = (
  <div>
    <h1 className="title" key="12">
      Mouli
    </h1>
    <h1 className="title" key="13">
      Harika
    </h1>
    <h1 className="title" key="14">
      Dinesh
    </h1>
  </div>
);

// root.render(div1);

//  Creating functional component of the same with JSX

const Div2 = () => {
  return (
    <div>
      <h1 className="title" key="121">
        Mouli
      </h1>
      <h1 className="title" key="131">
        Harika
      </h1>
      <h1 className="title" key="141">
        Dinesh
      </h1>
    </div>
  );
};

// root.render(<Div2 />);

// Creating a Header Component using functional component using JSX

const Header = () => {
  return (
    <div>
      <img src={applogo} alt="Logo" />
      <input type="text" placeholder="enter your input" />
      <img src={applogo} alt="Logo" />
    </div>
  );
};

root.render(<Header />);
