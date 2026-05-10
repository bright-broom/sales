import { LINE_URL } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const targetMessages = [
  "営業の苦手意識を克服したい方",
  "安定した収益モデルを構築したい方",
  "実践的なスキルを身につけたい方",
];

export function CTABlock() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Target messages */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          {targetMessages.map((message, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span className="text-slate-300">{message}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
          まずは
          <span className="text-amber-400">無料相談</span>
          から始めてみませんか？
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          あなたの現状と目標をヒアリングし、最適な学習プランをご提案します
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-line px-10 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-line/30 transition-all hover:scale-105 hover:bg-brand-line/90"
          >
            LINEで無料相談を予約する
          </a>
          <p className="mt-4 text-sm text-slate-500">
            ※ 強引な勧誘は一切ありません
          </p>
        </div>
      </div>
    </section>
  );
}
