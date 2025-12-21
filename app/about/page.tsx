const highlights = [
  {
    title: "班級故事",
    detail: "預留",
  },
  {
    title: "學習成果",
    detail: "預留",
  },
  {
    title: "競賽紀錄",
    detail: "預留",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-6">
      <header className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
          關於我們
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          預留
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/30 bg-white/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.detail}
            </p>
            <div className="mt-4 h-28 rounded-xl border border-dashed border-slate-300 bg-white/70 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:border-slate-700 dark:bg-slate-800/70">
              <div className="flex h-full items-center justify-center">預留</div>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/30 bg-white/80 p-10 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">歷程</h2>
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            預留
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["跨域協作", "學習歷程", "預留", "國際交流", "營隊課程", "預留"].map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="rounded-2xl border border-dashed border-slate-300 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
