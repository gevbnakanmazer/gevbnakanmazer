import Link from "next/link";

import { useRef, useEffect } from "react";
import { SocialMedia } from "../utilsComponents/SocialMedia";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";

export const MobileMenu = ({ setShowMenu }) => {
  const popUpRef = useRef();

  const handleOutSideClick = (e) => {
    // if (!e.path.includes(popUpRef.current) ) {
    //   setShowMenu(false);
    // }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, []);

  return (
    <div
      ref={popUpRef}
      className="w-2/3 ease-in absolute top-0 left-0 z-2000 bg-white shadow-lg h-screen list-none"
    >
      <div>
        <div className="border-b-2 border-inherit flex justify-center">
          <SocialMedia />
        </div>
        <div className="menuFont border-b-2 border-inherit [&>li]:p-3">
          <li>
            <Link href="/"> Գլխավոր </Link>
          </li>

          <li>
            <Link href="/services"> Ծառայություններ </Link>
          </li>
          <li>
            <Link href="/natural-hair">Բնական Մազեր</Link>
          </li>
          <li>
            <Link href="/blog">Բլոգ</Link>
          </li>
        </div>
        <div className="[&>li]:p-3 border-b-2 border-inherit mb-4 menuFont">
          <li>
            <Link href="/about"> Մեր Մասին</Link>
          </li>
          <li>
            <Link href="/contact">Կապ</Link>
          </li>
          <li>
            <Link target="_blank" href="https://goo.gl/maps/2iRZwLdREVSLJzGp9">
              Քարտեզ
            </Link>
          </li>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="p-2">
              <PhoneForwardedIcon fontSize="large" />
            </div>

            <div className="flex items-center fontVrcnagir">
              <div className="p-2">
                <p>+374</p>
              </div>
              <div>
                <p>91-22-22-79</p>
                <p>55-22-22-78</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 fontVrcnagir">
          <p>Ք․Երևան, Կոմիտաս 30</p>
        </div>
      </div>
    </div>
  );
};
