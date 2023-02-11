import Link from "next/link";
import { SocialMedia } from "./utilsComponents/SocialMedia";

export const Topnav =()=>{
    return (
      <div className="menuFont border-b-4 border-inherit flex justify-around">
        <div className="list-none flex items-center [&>li]:p-2">
          <li>
            <Link href="/about">Մեր Մասին</Link>
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
        <div className="flex items-center">
          <SocialMedia />
          <a>Մուտք</a>
        </div>
      </div>
    );
}