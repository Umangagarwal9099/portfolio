# Assets to drop in

The site works as-is, but a few real files will make it complete:

- `public/resume.pdf` — currently a generated placeholder PDF. Replace with your real resume, same filename, and the Resume button everywhere on the site will link to it automatically.
- `public/images/projects/*.png` — done. Real screenshots are wired into every case study's browser mockup (`src/data/projects.ts` → `image` / `secondaryImage`), including the real TerranovaInfra plot-map screenshot next to the interactive recreation.
- Major academic project PDF (*Secure Data Sharing and Search for Cloud-Edge Collaborative Storage*) — send this and I'll read it and fill in `src/data/projects.ts` → `ACADEMIC_PROJECTS[0]` (currently a clearly-marked "awaiting source PDF" placeholder in the Engineering Archive section) with the real architecture, algorithms, and results.

Nothing above blocks a working build — these just upgrade specific sections once provided.
