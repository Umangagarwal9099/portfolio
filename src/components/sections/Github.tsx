import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

const GITHUB_USER = "Umangagarwal9099";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

type GhRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

async function getGithubData() {
  try {
    const headers = { Accept: "application/vnd.github+json" };
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GhUser = await userRes.json();
    const repos: GhRepo[] = await reposRes.json();

    const nonForkRepos = repos.filter((r) => !r.fork);
    const languages = new Map<string, number>();
    for (const repo of nonForkRepos) {
      if (repo.language) languages.set(repo.language, (languages.get(repo.language) ?? 0) + 1);
    }
    const topLanguages = [...languages.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang);

    const recentRepos = nonForkRepos
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 4);

    return { user, recentRepos, topLanguages };
  } catch {
    return null;
  }
}

export async function Github() {
  const data = await getGithubData();

  return (
    <section className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Open Source"
          title="What's on GitHub."
          description={`Live from @${GITHUB_USER} — pulled at build/request time via the GitHub REST API.`}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="rounded-2xl border border-border-strong bg-surface/40 p-7">
              {data ? (
                <dl className="grid grid-cols-2 gap-6">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                      Public repos
                    </dt>
                    <dd className="mt-1 font-display text-3xl text-paper">{data.user.public_repos}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                      Followers
                    </dt>
                    <dd className="mt-1 font-display text-3xl text-paper">{data.user.followers}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                      Top languages
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {data.topLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-border-strong px-3 py-1 text-xs text-paper-dim"
                        >
                          {lang}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-paper-dim">
                  Live GitHub stats are unavailable right now — visit the profile directly below.
                </p>
              )}

              <a
                href={SITE.social.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-raised"
              >
                @{GITHUB_USER} ↗
              </a>
            </div>
          </Reveal>

          {data && data.recentRepos.length > 0 && (
            <RevealGroup className="grid gap-3 sm:grid-cols-2">
              {data.recentRepos.map((repo) => (
                <RevealItem key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="group flex h-full flex-col rounded-2xl border border-border p-6 transition-colors hover:border-border-strong hover:bg-surface-raised"
                  >
                    <p className="font-mono text-sm font-medium text-paper group-hover:text-brass">
                      {repo.name}
                    </p>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-paper-dim">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[11px] text-paper-dim">
                      {repo.language && <span>{repo.language}</span>}
                      <span>★ {repo.stargazers_count}</span>
                    </div>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </div>
    </section>
  );
}
