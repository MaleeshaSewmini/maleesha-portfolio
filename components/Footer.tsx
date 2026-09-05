export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-5">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-neutral-200 py-7 text-sm text-neutral-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Maleesha Sewmini
        </p>

        <p>
          Built with Next.js & curiosity.
        </p>
      </div>
    </footer>
  );
}