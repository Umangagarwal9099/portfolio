import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  src: string;
  alt: string;
  href?: string;
  priority?: boolean;
  className?: string;
};

function getDomain(href?: string) {
  if (!href) return "";
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function BrowserMockup({ src, alt, href, priority, className }: BrowserMockupProps) {
  const domain = getDomain(href);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[0_30px_70px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        {domain && (
          <span className="mx-auto flex items-center gap-1.5 rounded-full bg-ink/50 px-3 py-1 font-mono text-[11px] text-paper-dim">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
                fill="currentColor"
              />
            </svg>
            {domain}
          </span>
        )}
      </div>
      <div className="relative aspect-[1920/920] w-full overflow-hidden bg-ink">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
