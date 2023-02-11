import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MobileMenu } from "./MobileMenu";

export const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handlShowMenu = (e) => {
    setShowMenu((_prev) => !_prev);
  };

  return (
    <>
      {showMenu ? (
        <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      ) : null}
      <div>
        <div className="flex justify-between p-4 shadow-lg">
          <div className="logoContainer"></div>

          <div className="navLogo"></div>
          <div className="cursor-pointer">
            {showMenu ? (
              <CloseIcon onClick={handlShowMenu} />
            ) : (
              <MenuIcon onClick={handlShowMenu} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
