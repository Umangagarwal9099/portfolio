import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-shell flex flex-col gap-4 py-10 text-xs text-paper-dim md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}. Built from scratch with Next.js.</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-paper">
            {SITE.email}
          </a>
          <a href={SITE.social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            GitHub
          </a>
          <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-paper">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
