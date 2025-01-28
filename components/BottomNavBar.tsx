import { NavLinks } from "@/lib/consts";
import { Facebook } from "lucide-react";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-black w-[50%] justify-between items-center h-20 flex flex-col lg:flex-row">
        <div className="text-xl font-bold">MyLogo</div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4">
          {NavLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
