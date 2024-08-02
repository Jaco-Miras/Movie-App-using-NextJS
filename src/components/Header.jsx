import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { IoInformationCircleSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem
          title="about"
          address="/about"
          Icon={IoInformationCircleSharp}
        />
      </div>

      <Link href={"/"} className="flex items-center">
        <span className="text-2xl text-white font-bold bg-blue-500 py-1 px-2 rounded-lg">
          Movie App
        </span>
      </Link>
    </div>
  );
}
