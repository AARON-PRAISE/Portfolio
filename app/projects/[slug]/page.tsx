const projects = {
  "card-qard": {
    name: "Card Qard",
    image: "/RealCard.jpg",
    role: "Backend Engineer (Serverless / GCP)",
    description:
      "Card Qard is a serverless QR code generation system that converts user input such as links or text into scannable QR codes.",
    responsibilities: [
      "Built Google Cloud Functions for QR code generation logic",
      "Designed REST API endpoints for FlutterFlow integration",
      "Implemented scalable serverless architecture using Node.js",
      "Managed backend request/response flow for QR generation",
    ],
    stack: [
      "FlutterFlow",
      "Google Cloud Functions",
      "Node.js",
      "REST APIs",
    ],
    link: "https://apps.apple.com/ru/app/card-qard/id6748201430",
  },

  "pamiatka": {
    name: "Pamiatka",
    image: "/Pamiatka.jpg",
    role: "Backend Engineer (Payments / Integrations)",
    description:
      "Traffic control and management application with secure financial transaction handling.",
    responsibilities: [
  "Built serverless backend infrastructure using Google Cloud Functions",
  "Integrated YooKassa payment gateway for secure transaction processing",
  "Implemented webhook-based payment event handling system",
  "Designed REST API communication layer for FlutterFlow frontend",
  "Ensured secure and reliable financial transaction workflows",
],
    stack: [
      "FlutterFlow",
      "Google Cloud Platform",
      "Node.js",
      "YooKassa",
      "Webhooks",
      "REST APIs",
    ],
    link: "https://www.rustore.ru/catalog/app/com.dtpru.pamiatka3",
  },

  "onymi": {
    name: "OnyMI",
    image: "/Onymi.jpg",
    role: "Lead Backend Engineer (Team Project)",
    description:
      "AI-powered media transformation platform that converts images into animated sticker packs.",
    responsibilities: [
  "Led backend development in a distributed engineering team environment",
  "Built Supabase Edge Functions for AI pipeline orchestration",
  "Built Deno Functions for video editing and compression",
  "Integrated multi-model AI systems including WaveSpeed, Wan 2.2, and SeedDream",
  "Developed media conversion pipelines for GIF, WebM, and WebP formats",
  "Implemented emotion-based image generation system (6 variations per input)",
  "Optimized serverless execution flow and handled timeout constraints",
  "Contributed to self-hosted backend infrastructure design",
],
    stack: [
      "Supabase",
      "Deno",
      "WaveSpeed",
      "Wan 2.2",
      "SeedDream",
      "AI Pipelines",
    ],
    link:
      "https://play.google.com/store/apps/details?id=com.mycompany.onymi",
  },

  "backload": {
    name: "Backload",
    image: "/next.svg",
    role: "Lead Backend Engineer",
    description:
      "Logistics and delivery order platform connecting customers and executors.",
    responsibilities: [
      "Led backend development in a professional engineering team",
      "Built Supabase Edge Functions",
      "Designed REST API architecture",
      "Implemented webhook processing",
      "Integrated YooKassa payments",
      "Designed delivery workflow systems",
    ],
    stack: [
      "FlutterFlow",
      "Supabase",
      "Deno",
      "YooKassa",
      "REST APIs",
      "Webhooks",
    ],
    link: "",
  },

  "manna": {
    name: "Manna",
    image: "/manna.PNG",
    role: "Backend Engineer",
    description:
      "AI-powered meal and timetable generation platform.",
    responsibilities: [
      "Built backend services using GCP and Railway",
      "Integrated GPT models for meal generation",
      "Built AI image generation pipeline",
      "Connected backend services to FlutterFlow",
      "Designed structured meal plan generation workflows",
    ],
    stack: [
      "FlutterFlow",
      "Node.js",
      "Railway",
      "GPT APIs",
      "WaveSpeed",
      "Google Cloud Platform",
    ],
    link: "",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project =
    projects[slug as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
   <main className="min-h-screen bg-black text-white px-6 sm:px-8 pt-28 pb-20">
      <img
        src={project.image}
        alt={project.name}
        className="w-full max-h-[500px] object-cover rounded-2xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {project.name}
      </h1>

      <p className="text-blue-400 mt-3">
        {project.role}
      </p>

      <p className="text-gray-300 mt-6 text-lg">
        {project.description}
      </p>

      <h2 className="text-3xl font-bold mt-10">
        Responsibilities
      </h2>

      <ul className="mt-4 space-y-3">
        {project.responsibilities.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mt-10">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-3 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800 px-4 py-2 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-10 bg-white text-black px-6 py-3 rounded-lg"
        >
          View Project
        </a>
      )}
    </main>
  );
}