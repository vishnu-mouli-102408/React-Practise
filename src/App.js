import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import userContext from "../utils/userContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

import "../style.css";
import Profile from "./components/Profile";
import store from "../utils/store";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {

  const [user, setUser] = useState({
      id:2,
      name:"Dinesh",
      email:"ilu@gmail.com"
  });

  return (
    <Provider store={store}>
    <userContext.Provider value={{user:user}}>
    <div className="bg-sky-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
