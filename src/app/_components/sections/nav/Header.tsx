"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`left-40 top-4 z-40 flex w-3/4 items-center px-20 bg-gray-100 text-white rounded-lg ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-[9999] bg-[#263295] !bg-opacity-90  backdrop-blur-sm transition"
            : "absolute bg-transparent "
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-35 ml-4 max-w-full px-4 xl:mr-12 ">
              <Link
                href="/"
                className={`block w-full rounded-xl ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={50}
                  height={30}
                  className="w-full rounded-xl dark:hidden"
                />
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={50}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end gap-4 px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-gray-900  px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100 !bg-opacity-80 border-none backdrop-blur w-full"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8 ">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-3  ${
                              usePathName === menuItem.path
                                ? "text-yellow-300 "
                                : "text-dark hover:text-primary"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base text-black lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path ?? ""}
                                  key={index}
                                  className="hover:text-primary block rounded py-2.5 text-sm text-black lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/api/auth/signin"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-xl bg-blue-500 px-4 py-2 text-base font-medium text-white transition duration-300 hover:bg-opacity-70 md:block md:px-2 lg:px-4 xl:px-6"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
