import { LINE_URL, EXTERNAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-black text-white">WSS</span>
            <span className="text-2xl font-black text-amber-500">CLASS</span>
          </Link>

          {/* CTA */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-line px-8 py-3 text-base font-bold text-white shadow-lg shadow-brand-line/25 transition-all hover:bg-brand-line/90"
          >
            個別相談はこちら
          </a>

          {/* Login Link */}
          <a
            href={EXTERNAL_LINKS.login}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            ログイン
          </a>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <Link
              href={EXTERNAL_LINKS.terms}
              className="transition-colors hover:text-white"
            >
              利用規約
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href={EXTERNAL_LINKS.privacy}
              className="transition-colors hover:text-white"
            >
              プライバシーポリシー
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href={EXTERNAL_LINKS.tokushoho}
              className="transition-colors hover:text-white"
            >
              特定商取引法に基づく表記
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href={EXTERNAL_LINKS.company}
              className="transition-colors hover:text-white"
            >
              運営会社
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; 2026 WS Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
