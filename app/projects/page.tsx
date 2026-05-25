import Link from "next/link";

const projects = [
  {
    slug: "card-qard",
    name: "Card Qard",
    image: "/RealCard.jpg",
    role: "Backend Engineer",
    description:
      "Serverless QR code generation system using cloud functions.",
  },
  {
    slug: "pamiatka",
    name: "Pamiatka",
    image: "/Pamiatka.jpg",
    role: "Backend Engineer",
    description:
      "Traffic control system with payment integrations and backend APIs.",
  },
  {
    slug: "onymi",
    name: "OnyMI",
    image: "/Onymi.jpg",
    role: "Lead Backend Engineer",
    description:
      "AI-powered animated sticker generation system.",
  },
  {
    slug: "backload",
    name: "Backload",
    image: "/next.svg",
    role: "Lead Backend Engineer",
    description:
      "Logistics backend system for managing deliveries.",
  },
  {
    slug: "manna",
    name: "Manna",
    image: "/manna.PNG",
    role: "Backend Engineer",
    description:
      "AI meal and timetable generation system.",
  },
];

export default function ProjectsPage() {
  return (
   <main className="min-h-screen bg-black text-white px-6 sm:px-8 pt-28 pb-20">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl overflow-hidden border border-zinc-800 hover:border-white transition"
          >

            {/* FIXED IMAGE BLOCK */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* TEXT */}
            <div className="p-5">
              <h2 className="text-2xl font-bold">{p.name}</h2>

              <p className="text-blue-400 mt-1">
                {p.role}
              </p>

              <p className="text-gray-400 mt-3 text-sm">
                {p.description}
              </p>

              <div className="mt-5 text-sm text-white opacity-70 group-hover:opacity-100">
                View Case Study →
              </div>
            </div>

          </Link>
        ))}
      </div>
    </main>
  );
}