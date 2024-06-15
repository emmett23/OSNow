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
    <footer className="flex h-full min-h-[18vh] w-full flex-col items-center justify-center bg-gray-300 p-4 text-black md:p-8">
      <h1 className="mb-4 text-lg font-bold text-blue-700 md:text-2xl">
        Open Source Now
      </h1>
      <ul className="mb-4 flex flex-col items-center gap-2 md:flex-row">
        <li>
          <Link href="/faqs">
            <p className="hover:underline">FAQS</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:underline">Contact</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:underline">About</p>
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
        <p className="mb-2">Copyright OSNow, {year}</p>
        <p className="mb-2">
          <Link href="/terms" className="hover:underline">
            Terms and Conditions
          </Link>
          |
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          |
          <Link href="/legal" className="hover:underline">
            Legal notice
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
