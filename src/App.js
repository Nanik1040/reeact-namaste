import React from "react";
//default imoport
import ReactDOM from "react-dom/client";
//named import
import { HeaderComponent } from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

/**
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
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(<AppLayout />);
