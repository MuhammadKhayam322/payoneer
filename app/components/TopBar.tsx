import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[#2b2b2b] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6">
        
        <Link href="#" className="hover:text-white transition">
          RESOURCES
        </Link>

        <Link href="#" className="hover:text-white transition">
          DEVELOPERS API
        </Link>

        <Link href="#" className="hover:text-white transition">
          ABOUT US
        </Link>

        {/* Language Selector */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-white">
          <span className="text-base">🇬🇧</span>
          <span>ENGLISH</span>
        </div>
      </div>
    </div>
  );
}
