import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">

      {/* logo */}
      <Link href="/" className="font-bold text-white">
        Aaron Praise
      </Link>

      {/* links */}
      <div className="flex items-center gap-6 text-gray-300 text-sm">

        <Link href="/projects" className="hover:text-white transition">
          Projects
        </Link>

<a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=formalpythons@gmail.com"
            className="px-6 py-3 border border-zinc-700 rounded-xl text-gray-300 hover:text-white transition w-full sm:w-auto text-center"
          >
            Contact
          </a>
        <a
          href="https://www.linkedin.com/in/anniepkj/"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

      </div>
    </nav>
  );
}