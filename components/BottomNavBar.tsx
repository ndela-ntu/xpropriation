import { NavLinks } from "@/lib/consts";
import { Facebook } from "lucide-react";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-black w-[50%] justify-between items-center h-20 flex flex-col lg:flex-row">
        <div className="text-xl font-bold">Logo</div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
