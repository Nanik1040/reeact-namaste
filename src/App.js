import React from "react";
//default imoport
import ReactDOM from "react-dom/client";
//named import
import { HeaderComponent } from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestarauntMenu from "./components/RestarauntMenu";

/**
 * 
 * header
 *   - logo
 *   - nav items(right side)
 *   - cart
 * body
 *   - search bar
 *   - restaraunt list
 *    - rest card
 *        - image
 *         - name
 *          - rating
 *          - cusines
 *  Footer
 *    - copyright
 */

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />

      <Outlet />
      <FooterComponent />
    </>
  );
};
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <BodyComponent />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path:"/restaraunt/:id",
          element:<RestarauntMenu/>
        }
      ]
    }
  ]
)
console.log("App rendered")
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
