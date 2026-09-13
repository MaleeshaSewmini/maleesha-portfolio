export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base text-white/70 backdrop-blur-xl transition duration-300 hover:bg-white/[0.08] sm:flex-row">

        <div className="flex items-center gap-3">
          <p className="text-lg font-bold text-white">
            © {new Date().getFullYear()} Maleesha Sewmini
          </p>

          <span className="font-bold text-white/30">•</span>

          <p className="text-base font-semibold text-white/60">
            Some Rights Reserved
          </p>
        </div>

        <p className="text-base font-semibold text-white/60">
          Built with{" "}
          <span className="font-bold text-white">Next.js</span>{" "}
          <span className="text-white/40">&</span>{" "}
          <span className="font-bold text-white/80">curiosity.</span>
        </p>

      </div>
    </footer>
  );
}