import Link from "next/link";
import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t-[2px] border-[#35A4EC] bg-white mb-[40px] md:mb-0">
      <div className="container max-w-full hidden md:block">
        <div className="flex flex-wrap items-center py-[30px]">
          <div className="w-full md:w-auto flex-initial">
            <ul className="flex justify-center gap-[20px] mb-4 md:mb-0">
              <li>
                <a href="https://www.facebook.com/LeMinerale" target="_blank">
                  <img
                    src="https://www.leminerale.com/assets/img/i-fb.png"
                    alt="facebook"
                    className="w[40px] h-[40px] transition duration-200 ease-in-out filter hover:brightness-75"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.x.com/le_mineraleid" target="_blank">
                  <img
                    src="https://www.leminerale.com/assets/img/i-x.png"
                    alt="twitter"
                    className="w[40px] h-[40px] transition duration-200 ease-in-out filter hover:brightness-75"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/le_mineraleid"
                  target="_blank"
                >
                  <img
                    src="https://www.leminerale.com/assets/img/i-ig.png"
                    alt="instagram"
                    className="w[40px] h-[40px] transition duration-200 ease-in-out filter hover:brightness-75"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@LeMineraleID" target="_blank">
                  <img
                    src="https://www.leminerale.com/assets/img/i-yt.png"
                    alt="youtube"
                    className="w[40px] h-[40px] transition duration-200 ease-in-out filter hover:brightness-75"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@leminerale_id" target="_blank">
                  <img
                    src="https://www.leminerale.com/assets/img/i-tt.png"
                    alt="TikTok"
                    className="w[40px] h-[40px] transition duration-200 ease-in-out filter hover:brightness-75"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-grow flex items-center justify-end">
            <a
              href="https://leminerale.com/terms-conditions"
              className="mx-6 text-center text-black font-afacad text-[18px] underline hover:text-[#2889BE]"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="https://leminerale.com/privacy-policy"
              className="mx-6 text-center text-black font-afacad text-[18px] underline hover:text-[#2889BE]"
            >
              Kebijakan Privacy
            </a>
          </div>
        </div>
        <div className="md:h-[30px] flex items-center justify-center font-afacad text-center bg-[#35A4EC] text-black py-4">
          PT Tirta Fresindo Jaya .. 2025
        </div>
      </div>
    </footer>
  );
}
