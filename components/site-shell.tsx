"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於", href: "/about" },
  { label: "成員", href: "/members" },
  { label: "聯絡", href: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const navWithState = useMemo(
    () =>
      navItems.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return { ...item, active };
      }),
    [pathname],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-40 mb-8 sm:mb-10 -mx-4 flex items-center justify-between border-b border-white/40 bg-white/85 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:mx-0 sm:rounded-b-xl">
          <Link href="/" className="group flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.08em]">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/DLHIT-website/DLHIT1.webp"
                alt="DLHIT Logo"
                width={36}
                height={36}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden sm:inline text-sm sm:text-base font-semibold text-slate-900 transition group-hover:text-sky-600 dark:text-slate-50 dark:group-hover:text-sky-300">
              DLHIT 2th
            </span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {navWithState.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-900 dark:hover:bg-slate-800/80 dark:hover:text-slate-100 ${item.active ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900" : "text-slate-700 dark:text-slate-200"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/80 transition"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Slide */}
        <nav className={`fixed top-0 left-0 bottom-0 z-30 w-64 bg-white/95 dark:bg-slate-900/95 border-r border-white/40 dark:border-slate-800 shadow-xl backdrop-blur-xl transition-transform duration-300 md:hidden overflow-y-auto ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col gap-2 p-4 pt-20">
            {navWithState.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-4 py-3 transition text-base font-medium ${item.active ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg" : "text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800/80"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {!isReady && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100">
            <div className="h-14 w-14 animate-spin rounded-full border-2 border-slate-600 border-t-white" />
            <p className="mt-6 text-sm tracking-wide">載入中...</p>
          </div>
        )}

        <main
          className={`flex-1 transition duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
        >
          {children}
        </main>

        <footer className="mt-16 rounded-2xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                網站導覽
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                首頁
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-300">
                關於
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-300">
                成員
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">其他資訊</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>預留</li>
                <li>預留</li>
                <li>預留</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">聯絡方式</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                預留
              </p>
              <div className="text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                dlhit.scaict.org
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
