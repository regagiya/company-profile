"use client";

import Link from "next/link";
import { Navlink } from "../navlink/navlink";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex bg-white justify-center  gap-20">
      <div className="h-[125px] flex items-center">
        <Link href="/" className="block relative z-10">
          <img
            src="https://www.leminerale.com/assets/img/leminerale-logo.png"
            alt="leminerale"
            className="w-[106px] h-auto"
          />
        </Link>
      </div>
      <div className="h-[125px] ml-[20px] flex items-center"></div>
      <nav className="hidden md:flex flex-col">
        <div className="flex justify-end items-center  py-4 space-x-2 border-b-2 border-[#68B8F3]">
          <a
            href="https://www.facebook.com/Leminerale"
            target="_blank"
            className="inline-flex items-center justify-center h-[26px] w-26px"
          >
            <img
              src="https:www.leminerale.com/assets/img/i-fb.png"
              alt="facebook"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://x.com/le_mineraleid"
            target="_blank"
            className="inline-flex items-center justify-center h-[26px] w-26px"
          >
            <img
              src="https://www.leminerale.com/assets/img/i-x.png"
              alt="X"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://www.instagram.com/le mineraleid/"
            target="_blank"
            className="inline-flex items-center justify-center h-[26px] w-26px"
          >
            <img
              src="https:www.leminerale.com/assets/img/i-ig.png"
              alt="Instagram"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://www.youtube.com/@LeMineraleID"
            target="_blank"
            className="inline-flex items-center justify-center h-[26px] w-26px"
          >
            <img
              src="https://www.leminerale.com/assets/img/i-yt.png"
              alt="Youtube"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://www.tiktok.com/@leminerale_id"
            target="_blank"
            className="inline-flex items-center justify-center h-[26px] w-26px"
          >
            <img
              src="https://www.leminerale.com/assets/img/i-tt.png"
              alt="TikTok"
              className="w-[26px] has-[26px]"
            />
          </a>
          <ul className="flex items-center pl-4">
            <li>
              <a
                // href=""
                className="w-[38px] h-[30px] flex items-center justify-center text-white bg-[#BC101F] hover:bg-[#E7172A] rounded-l-md"
              >
                ID
              </a>
            </li>
            <li className="__web-inspector-hide-shortcut__">
              <a
                //href=""
                className="w-[38px] h-[30px] flex items-center justify-center text-white bg-[#E7172A] hover:bg-[#BC101F] rounded-r-md"
              >
                EN
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex items-center font-sans text-[#68B8F3] text-[18px] font-bold justify-end space-x-12 menu ">
            <li className="transition-transform hover:scale-120">
              <Link href="/" className="">
                HOME
              </Link>
            </li>
            <li className="transition-transform hover:scale-120">
              <a href="/about" className="menu-item">
                ABOUT
              </a>
            </li>
            <li className="transition-transform hover:scale-120">
              <a href="/product" className="menu-item">
                PRODUCT
              </a>
            </li>
            <li className="transition-transform hover:scale-120">
              <Link href="/blog" className="menu-item">
                BLOG
              </Link>
            </li>
            <li className="transition-transform hover:scale-120">
              <Link href="/createblog" className="menu-item">
                CREATE BLOG
              </Link>
            </li>
            <li className="transition-transform hover:scale-120">
              <a href="/teams" className="menu-item">
                TEAMS
              </a>
            </li>
            <li className="transition-transform hover:scale-120">
              <a href="/contact" className="menu-item">
                CONTACT ME
              </a>
            </li>
            <button
              onClick={() => router.push("/logIn")}
              type="button"
              className="transition-transform hover:scale-120"
            >
              SIGN IN
            </button>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
