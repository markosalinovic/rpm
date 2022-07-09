import Link from 'next/link';
import { useState } from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from 'react-icons/io5';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const openSidebar = () => {
    setActive(!isActive);
  };
  return (
    <header className="z-30 w-full pl-4 md:px-8 py-4 bg-[#f8f5eb] sm:px-4 text-[#1e1e31] font-bold">
      <div className="flex items-center justify-between px-4 text-[21px]">
        <Link href="/">
          <span className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="TechHub Logo"
              className="h-12"
            />
            <span className="sr-only">TechHub</span>
          </span>
        </Link>
        <div className="hidden ml-[10%] md:flex uppercase gap-7 justify-between cursor-pointer">
          <Link href="/">
            <a className="hover:text-linkhover-100">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-linkhover-100">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-linkhover-100">
              Racing
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-linkhover-100">
              Calendar
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-linkhover-100">
              Archive
            </a>
          </Link>
        </div>

        <div className="flex items-center px-4">
          <div className="hidden md:flex">
            <div className="flex flex-row gap-3 place-items-center mr-4">
              <Link href="https://www.facebook.com/RPMEsportsF1">
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoFacebook className="text-xl hover:text-[#4267B2]" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/rpm_esports_f1/">
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoInstagram className="text-xl hover:text-[#C13584]" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCDJe02ByXBw9CctYGhCtBQQ" target={'_blank'} >
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoYoutube className="text-xl hover:text-[#FF0000]" />
                </a>
              </Link>
            </div>
            <div className='hidden lg:inline-block'>
            <Link href="https://discord.gg/rpm-esports-f1-join">
              <a>
                <img
                  alt="Discord"
                  src="https://img.shields.io/discord/857639166657822790?style=for-the-badge"
                />
              </a>
            </Link>
            </div>
          </div>

          <div className="inline-flex md:hidden">
            <button
              onClick={openSidebar}
              className="flex-none px-2 btn btn-white btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
          </div>

          <div className="relative flex md:hidden ">
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed inset-0 z-10 w-full h-full  opacity-5`}
              onClick={openSidebar}
            ></div>
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed z-50 w-5/12 h-auto text-black shadow-lg bg-gray-50 rounded-lg right-4 top-14`}
            >
              <ul className="py-2">
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      Home
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      About
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      Racing
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      Calendar
                    </li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      Archive
                    </li>
                  </a>
                </Link>
                <Link href="https://discord.gg/rpm-esports-f1-join">
                  <a>
                    <li className="px-6 py-2 bg-gray-50 hover:bg-[#e73c12] hover:text-white">
                      Join Discord
                    </li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
