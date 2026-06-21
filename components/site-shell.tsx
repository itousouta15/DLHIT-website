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
  { label: "成果", href: "/showcase" },
  { label: "聯絡", href: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-500">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-40 mb-8 sm:mb-10 -mx-4 flex items-center justify-between border-b border-white/40 bg-white/85 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:mx-0 sm:rounded-b-xl">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.08em]"
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/DLHIT1.webp"
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
                  className={`rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:bg-white/70 hover:text-slate-900 dark:hover:bg-slate-800/80 dark:hover:text-slate-100 ${
                    item.active
                      ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/70 dark:hover:bg-slate-800/80 transition"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Slide */}
        <nav
          className={`fixed top-0 left-0 bottom-0 z-30 flex w-72 flex-col bg-white/98 dark:bg-slate-900/98 border-r border-slate-100 dark:border-slate-800 shadow-2xl backdrop-blur-xl transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/DLHIT1.webp"
                  alt="DLHIT"
                  width={32}
                  height={32}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                DLHIT 2th
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="關閉選單"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
            {navWithState.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  item.active
                    ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Panel footer */}
          <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">切換明亮/深色</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <main
          className={`flex-1 transition-opacity duration-300 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </main>

        <footer className="mt-16 border-t border-slate-200/60 pt-10 pb-6 dark:border-slate-800">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/DLHIT1.webp"
                    alt="DLHIT"
                    width={32}
                    height={32}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-50">
                  DLHIT 2th
                </span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                在程式設計與資訊安全領域持續學習、相互切磋
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-600">
                © 2024–2026 DLHIT · All rights reserved.
              </p>
            </div>

            {/* Nav */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                快速導覽
              </h3>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                聯繫我們
              </h3>
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/itou.souta15/",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/itousouta15",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Discord",
                    href: "https://discord.gg/hPgKZ8RCXt",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.038.05a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .083-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
