/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "next/link"
import { Button } from "./button.jsx";

export default function NavigationMenu() {
  const handleMenuButton = () => {
    document.documentElement.toggleAttribute("menu-open");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <a href="#" className="md:flex hidden items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a href="#" className="flex items-center">
            <div className="md:hidden flex items-center justify-center">
              <div className="three-dot" onClick={handleMenuButton}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </a>
          <nav className="flex md:hidden gap-4">
            <a href="#" className="flex items-center">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
          </nav>
          <nav className="hidden md:flex gap-4">
            <a
              href="#"
              className="font-medium flex p-1 rounded-lg items-center text-sm transition-colors hover:bg-black hover:text-white duration-500 ease-in-out"
              // prefetch={false}
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium flex p-1 rounded-lg items-center text-sm transition-colors hover:bg-black hover:text-white duration-500 ease-in-out"
              // prefetch={false}
            >
              About
            </a>
            <a
              href="#"
              className="font-medium flex p-1 rounded-lg items-center text-sm transition-colors hover:bg-black hover:text-white duration-500 ease-in-out"
              // prefetch={false}
            >
              Services
            </a>
            <a
              href="#"
              className="font-medium flex p-1 rounded-lg items-center text-sm transition-colors hover:bg-black hover:text-white duration-500 ease-in-out"
              // prefetch={false}
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-black text-white rounded-lg p-1 hover:bg-blue-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12m-9 0a1 1 0 110 2m6-2a1 1 0 110 2"
                />
              </svg>
            </button>

            <button className="bg-red-500 text-white rounded-lg p-1 hover:bg-red-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.172 5.172a4.992 4.992 0 017.07 0L12 6.929l1.757-1.757a4.992 4.992 0 117.071 7.071l-7.071 7.071a1 1 0 01-1.414 0L3.172 12.243a4.992 4.992 0 010-7.071z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
