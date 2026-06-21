export default function ShowcasePage() {
  return (
    <div className="space-y-10 pb-6">
      <header className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Results
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">成果展示</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          收錄 DLHIT 成員的競賽成果、開源專案與學習歷程展示。
        </p>
      </header>

      <section className="rounded-3xl border border-white/30 bg-white/70 py-24 px-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-50 dark:bg-sky-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-sky-600 dark:text-sky-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">即將推出</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            成果展示頁面正在籌備中。我們將在這裡展示競賽成果、開源作品與學習里程碑。敬請期待！
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/members"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-900"
            >
              認識我們的成員
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
