import Image from "next/image";
import members from "@/data/members.json";

export default function MembersPage() {
  return (
    <div className="space-y-10 pb-6">
      <header className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Members
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">成員列表</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          預留
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/90 to-white/70 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:from-slate-900/80 dark:to-slate-900/60"
          >
            {/* Image Header */}
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-900/40 dark:to-blue-900/40">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h2>
                <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
                  {member.role}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                {member.blurb}
              </p>

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-[0.08em]">
                    技能
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Works */}
              {member.works && member.works.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-[0.08em]">
                    作品
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.works.map((work) => (
                      <span
                        key={work}
                        className="rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:from-blue-900/40 dark:to-blue-800/30 dark:text-blue-200"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {member.links && member.links.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase font-semibold text-green-600 dark:text-green-400 tracking-[0.08em]">
                    連結
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.links.map((link) => {
                      // Handle both string and object formats
                      const text = typeof link === 'string' ? link : link.text;
                      const url = typeof link === 'string' ? '#' : link.url;
                      
                      return (
                        <a
                          key={text}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-gradient-to-r from-green-100 to-green-50 px-3 py-1 text-xs font-medium text-green-700 transition hover:from-green-200 hover:to-green-100 dark:from-green-900/40 dark:to-green-800/30 dark:text-green-200 dark:hover:from-green-900/60 dark:hover:to-green-800/50"
                        >
                          {text}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}