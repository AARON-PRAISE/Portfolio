import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black opacity-90" />

      <div className="relative flex flex-col items-center text-center px-6 pt-28 pb-24">

        {/* name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          Aaron Praise
        </h1>

        {/* subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl">
          Backend Engineer building{" "}
          <span className="text-white">serverless systems</span>,{" "}
          <span className="text-white">AI pipelines</span>,{" "}
          <span className="text-white">GPU-powered workloads</span>, and{" "}
          <span className="text-white">payment-driven backend architectures</span>.
        </p>

        {/* stats */}
        <div className="flex gap-6 sm:gap-10 mt-10 text-sm text-gray-400 flex-wrap justify-center">

          <div className="text-center">
            <div className="text-white text-lg sm:text-xl font-bold">Serverless</div>
            Architecture & APIs
          </div>

          <div className="text-center">
            <div className="text-white text-lg sm:text-xl font-bold">AI Systems</div>
            Pipelines & Integrations
          </div>

          <div className="text-center">
            <div className="text-white text-lg sm:text-xl font-bold">GPU Infra</div>
            RunPod / AI Image Gen
          </div>

          <div className="text-center">
            <div className="text-white text-lg sm:text-xl font-bold">Cloud Ops</div>
            Server Management
          </div>

        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-16">

          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition w-full sm:w-auto text-center"
          >
            View Projects
          </Link>

         <a
  href="mailto:formalpythons@gmail.com?subject=Portfolio%20Contact" 
  className="hover:text-white transition"
>
  Contact
</a>

        </div>

      </div>
    </main>
  );
}