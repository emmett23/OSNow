import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { Tooltip } from "@mantine/core";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="h-full min-h-[18vh] w-full bg-[#d5d8f1] px-2 text-gray-800 md:px-4">
      <footer className="flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="mb-4 text-lg font-bold text-blue-700 md:text-2xl">
          Open Source Now
        </h1>
        <ul className="mb-4 flex flex-col items-center gap-2 md:flex-row">
          <li>
            <Link href="/faqs">
              <p className="text-sm hover:underline">FAQS</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-sm hover:underline">Contact</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-sm hover:underline">About</p>
            </Link>
          </li>
        </ul>
        <div className="mb-4 flex gap-3">
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="rounded-full border-2 border-gray-400 p-1 hover:text-blue-500 md:p-2"
          >
            <FaXTwitter className="text-xl md:text-2xl" />
          </Link>
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="rounded-full border-2 border-gray-400 p-1 hover:text-blue-700 md:p-2"
          >
            <FaFacebookF className="text-xl md:text-2xl" />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="rounded-full border-2 border-gray-400 p-1 hover:text-blue-800 md:p-2"
          >
            <FaLinkedinIn className="text-xl md:text-2xl" />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="rounded-full border-2 border-gray-400 p-1 hover:text-pink-500 md:p-2"
          >
            <FaInstagram className="text-xl md:text-2xl" />
          </Link>
        </div>
        <div className="text-center text-sm md:text-base">
          <p className="mb-2">
            Built by the team, including you! Awaiting your
            <Tooltip
              label="Pull Requests - your changes to the codebase."
              position="top"
              withArrow
              className="inline-block"
            >
              <Link
                href="https://github.com/emmett23"
                className="pl-1 font-semibold text-blue-900 hover:underline"
              >
                PR
              </Link>
            </Tooltip>
          </p>
        </div>
      </footer>
      <div className="flex flex-col items-center py-4 border-t border-gray-500 md:flex-row md:justify-between">
        <p className="mb-2 md:mb-0">Copyright <span className="text-blue-800 font-bold">OSNow</span>, {year}</p>
        <p className="mb-2 md:mb-0">
          <Link href="/terms" className="hover:underline">
            Terms and Conditions
          </Link>
          {" | "}
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          {" | "}
          <Link href="/legal" className="hover:underline">
            Legal notice
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
