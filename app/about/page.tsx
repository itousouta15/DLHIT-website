const highlights = [
  {
    title: "班級故事",
    detail:
      "DLHIT 由一群對程式充滿熱情的高中生組成。每次讀書會、每個 debug 的深夜、每場競賽前的緊張準備，都成為我們共同珍藏的記憶。"
  },
  {
    title: "學習成果",
    detail:
      "從基礎資料結構到進階演算法，從網頁前端到資訊安全，成員們在各自領域深耕，也透過分享讓整個團隊一同成長。"
  },
  {
    title: "競賽紀錄",
    detail:
      "積極參與 APCS 程式能力測驗、資安 CTF、全國資訊學科能力競賽等。每次比賽都是一次磨練，也是與強者並肩的機會。"
  },
];

const journeyTags = [
  { label: "跨域協作", desc: "資安 × 前端 × 競程，多領域融合" },
  { label: "學習歷程", desc: "有系統地從基礎到進階建立知識體系" },
  { label: "演算法實戰", desc: "每週題目分析，持續精進解題能力" },
  { label: "資訊安全", desc: "CTF 競賽、漏洞研究、資安知識累積" },
  { label: "競賽歷練", desc: "在壓力下磨練解題速度與邏輯思維" },
  { label: "技術分享", desc: "定期成果分享，相互激勵共同成長" },
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
          大里高中資訊校隊（DLHIT）是一群熱愛程式設計的高中生組成的學習社群，致力於競技程式設計與資訊安全的探索，在競賽舞台上展現實力。
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
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/30 bg-white/80 p-8 sm:p-10 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">學習歷程</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          我們涵蓋多元技術領域，從演算法競賽到資訊安全，每位成員都在探索屬於自己的方向，同時在團隊中相互支持、共同進步。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeyTags.map((tag) => (
            <div
              key={tag.label}
              className="rounded-2xl border border-white/30 bg-white/80 px-4 py-4 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/70"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {tag.label}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {tag.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
