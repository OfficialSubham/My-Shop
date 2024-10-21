/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "next/link"
import { Button } from "./button.jsx";

export default function NavigationMenu() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <a href="#" className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
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
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
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
