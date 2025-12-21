const members = Array.from({ length: 8 }).map((_, idx) => ({
  name: `預留 ${idx + 1}`,
  role: "預留",
  blurb: "預留",
}));

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
            className="flex flex-col rounded-2xl border border-white/30 bg-white/80 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white/80 text-xs uppercase tracking-[0.08em] text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                照片
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {member.name}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-300">{member.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {member.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-300">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">技能</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">作品</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">連結</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}