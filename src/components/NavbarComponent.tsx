"use client";

import MobileNavbarComponent from "./MobileNavbarComponent";
import WindowNavbarComponent from "./WindowNavbarComponent";


const NavbarComponent = () => {
  return (
    <section >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Window */}
          <WindowNavbarComponent/>
         
           {/* Mobile */} 
           <MobileNavbarComponent/>
        </nav>
      </div>
    </section>
  );
};
export { NavbarComponent };
