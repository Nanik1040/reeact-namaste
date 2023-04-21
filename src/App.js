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
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass"

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
          element: <About />,
          children : [
            {
              path:"profile", // if you give / , then it will it take it as localhost:1234/profile . we need this as children right so thats why we haven't added that
              element:<Profile/> // and if we are creating childrwn , we need to give outlet in parent , ex: chechk app.js we will hav eoutlet there .. instead of outlet you can directly add comp name also ex. <Profile/> check it in about.js
            }
          ]
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
// console.log("App rendered")
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
