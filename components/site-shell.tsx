"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "關於本班", href: "/about" },
  { label: "成果", href: "/showcase" },
  { label: "成員", href: "/members" },
  { label: "聯絡方式", href: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

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
        <header className="sticky top-0 z-40 mb-10 -mx-4 flex flex-wrap items-center gap-3 border-b border-white/40 bg-white/85 px-4 py-3 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:mx-0 sm:flex-nowrap sm:justify-between sm:rounded-b-xl">
          <div className="flex flex-1 flex-wrap items-center gap-4 sm:flex-nowrap">
            <Link href="/" className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-slate-400 bg-white/80 text-[10px] leading-none text-slate-700 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-slate-600 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100">
                Logo
              </div>
              <span className="text-base font-semibold text-slate-900 transition group-hover:text-sky-600 dark:text-slate-50 dark:group-hover:text-sky-300">
                DLEC 9th
              </span>
            </Link>
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
          </div>
          <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end">
            <nav className="flex max-w-full items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-semibold md:hidden">
              {navWithState.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 transition ${item.active ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900" : "bg-white/60 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </header>

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
                預留
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                預留
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                預留
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
                class.com
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
