import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import { Topnav } from "./Topnav";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import { useEffect } from "react";
import { Header } from "./header/Header";

export const Layout =({children}) =>{
  const [showing, setShowing] = useState(false);
  const mobileMode = useMediaQuery({
    query: "(max-width:700px)",
  });

  useEffect(() => {
    setShowing(true);
  });

  if (!showing) {
    return null;
  }

  

  return (
    <>
      {mobileMode ? (
        <MobileNavbar />
      ) : (
        <div>
          <Topnav />
          <Navbar />
        </div>
      )}
      {children}
      <Footer />
    </>
  );
}