'use client';
import Image from 'next/image';

const infoCards = [
  {
    title: "持續學習",
    body: "錯題解析、新知跟進，永不停止前進腳步",
  },
  {
    title: "團隊成長",
    body: "分工合作、集體力量創造個人成就",
  },
  {
    title: "專業課程",
    body: "程式設計、演算法實戰，完整技術養成",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-4">
      <section className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/40 bg-white/70 px-4 py-8 sm:px-6 sm:py-12 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 w-full lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              DLHIT 2th
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              大里高中資訊校隊
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 -mt-4">
              Talk is cheap. Show me the code.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-white dark:text-slate-900"
              >
                成員介紹
              </a>
              <a
                href="#members"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:border-slate-500"
              >
                認識我們
              </a>
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center justify-center w-full lg:pl-8">
            <div className="relative flex h-40 w-40 sm:h-56 sm:w-56 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white/80 shadow-xl ring-8 ring-sky-200/60 transition hover:-translate-y-1 dark:border-slate-600 dark:bg-slate-900 dark:ring-sky-900/50 mx-auto sm:ml-auto">
              <Image
                src="/DLHIT2.webp"
                alt="DLHIT Logo"
                width={160}
                height={160}
                className="h-48 w-48 sm:h-64 sm:w-64 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              About
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">關於我們</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/30 bg-white/70 p-4 sm:p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.body}
              </p>
              <div className="mt-3 sm:mt-4 h-20 sm:h-24 rounded-xl border border-dashed border-slate-300 bg-white/60 text-center text-xs uppercase tracking-[0.2em] text-slate-400 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="flex h-full items-center justify-center">預留圖片</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="space-y-4 sm:space-y-6">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">里程紀錄</h2>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {["1", "2", "3"].map((phase, index) => (
            <div
              key={phase}
              className="rounded-2xl border border-white/30 bg-white/70 p-4 sm:p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">{phase}</span>
                <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-sky-700 dark:bg-sky-900/50 dark:text-sky-200">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                預留
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
