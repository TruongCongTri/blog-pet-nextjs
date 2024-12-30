'use client'
import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HeaderLogo from "./../public/header-logo.svg";
type LayoutProps = {
  children: ReactNode;
};
const headerContents = [
  {
    id: 1,
    name: 'About Me',
    link: '/about-me',
  },
  {
    id: 2,
    name: 'Blog',
    link: '/blog',
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    name: 'Write',
    link: '/write',
  },
]
export default function RootTemplate({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <div>
      {/* header */}
      <header>
        <nav className="border-gray-200 px-4 lg:px-[100px] py-2.5 lg:mt-[60px] mt-[20px]">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="-ml-3">
              <Image
                src={HeaderLogo}
                className="h-8 dark:text-white"
                alt="Flowbite Logo"
                width={220}
                height={36}
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="#"
                className="text-black font-normal text-xl rounded-lg 
                lg:px-[35px] px-5 lg:py-[20px] py-2.5
                border border-black
                hover:bg-[#A2CFFE] hover:border-transparent"
              >
                Log in
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-[40px] lg:mt-0">
                {headerContents.map((o) => (
                  <li key={o.id}>
                  <Link
                    href={o.link}
                    className={`${pathname === o.link ? ' lg:bg-[#A2CFFE] ' : '  '}  text-black font-normal text-xl block py-2 pr-4 pl-3 rounded-lg bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-2 lg:hover:bg-[#A2CFFE]`}
                    aria-current="page"
                  >
                    {o.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <div>Current pathname: {pathname}</div>  */}
      <div className="lg:mx-[100px] mt-[70px] mb-[140px]">
      {children}
      </div>
    </div>
  );
}
