import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" menuFont list-none flex justify-center [&>li]:p-3 shadow-lg">
        <li>
          <Link href="/">Գլխավոր</Link>
        </li>
        <li>
          <Link href="/services">Ծառայություններ</Link>
        </li>
        <li>
          <Link href="/natural-hair">Բնական Մազեր</Link>
        </li>
        <li>
          <Link href="/blog">Բլոգ</Link>
        </li>
      </div>
    </div>
  );
};
