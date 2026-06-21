'use client';
import Image from 'next/image';

const infoCards = [
  {
    title: "持續學習",
    body: "錯題解析、新知跟進，永不停止前進腳步",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-sky-600 dark:text-sky-400"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "團隊成長",
    body: "分工合作、集體力量創造個人成就",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-sky-600 dark:text-sky-400"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "專業課程",
    body: "程式設計、演算法實戰，完整技術養成",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-sky-600 dark:text-sky-400"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const timelineItems = [
  {
    phase: "組隊成立",
    badge: "01",
    body: "2024 年，DLHIT 正式成立。來自各年級的成員帶著對程式的熱情聚集，共同踏上這段旅程。",
  },
  {
    phase: "訓練備戰",
    badge: "02",
    body: "從基礎到進階，相互切磋、共同成長，逐步建立紮實的技術基底。",
  },
  {
    phase: "競賽征途",
    badge: "03",
    body: "出戰 APCS、資安 CTF、全國資訊學科競賽等各大賽事，在實戰中驗證學習成果，磨練解題思維。",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-4">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/40 bg-white/70 px-4 py-8 sm:px-6 sm:py-12 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 w-full lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              DLHIT 2th
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              大里高中<br />資訊校隊
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 -mt-2">
              Talk is cheap. Show me the code.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/members"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-white dark:text-slate-900"
              >
                成員介紹
              </a>
              <a
                href="/about"
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

      {/* About Cards */}
      <section id="about" className="space-y-6 sm:space-y-8">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">關於我們</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/30 bg-white/70 p-5 sm:p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-900/20">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="space-y-4 sm:space-y-6">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">里程紀錄</h2>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {timelineItems.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-white/30 bg-white/70 p-4 sm:p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white">{item.phase}</span>
                <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-sky-700 dark:bg-sky-900/50 dark:text-sky-200">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
