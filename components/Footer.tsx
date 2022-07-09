import Link from 'next/link';
import React from 'react'
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoDiscord
  } from 'react-icons/io5';

export default function Footer() {
  return (
    <div>

<section className="bg-white">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Home
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Racing
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Calendar
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Archive
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6 text-gray-700 text-3xl">
            <Link href="https://www.facebook.com/RPMEsportsF1">
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoFacebook className="hover:text-[#4267B2]" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/rpm_esports_f1/">
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoInstagram className="hover:text-[#C13584]" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCDJe02ByXBw9CctYGhCtBQQ" target={'_blank'} >
                <a target='_blank' rel='noopener noreferrer'>
                  <IoLogoYoutube className="hover:text-[#FF0000]" />
                </a>
              </Link>
              <Link href="https://discord.gg/rpm-esports-f1-join">
              <a>
                <IoLogoDiscord className="hover:text-[#FF0000]" />
              </a>
            </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 RPM Esports. All rights reserved.
        </p>
    </div>
</section>

    </div>
  )
}
