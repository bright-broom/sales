import { LINE_URL, STATS } from "@/lib/constants";
import { Users, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow effects */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/20 blur-[128px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Stats badges */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Users className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-bold text-white">
                  受講生
                  <span className="ml-1 text-lg text-amber-400">
                    {STATS.students}
                  </span>
                  人突破
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <PlayCircle className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-bold text-white">
                  動画コンテンツ
                  <span className="ml-1 text-lg text-amber-400">
                    {STATS.videos}
                  </span>
                  本以上
                </span>
              </div>
            </div>

            {/* Main copy */}
            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              営業の悩みを
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">『仕組み』</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-400/60 lg:h-4" />
              </span>
              で解決する
              <br />
              <span className="text-amber-400">実践型</span>
              セールスプログラム
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 lg:text-xl">
              営業に苦手意識のあるクリエイター・フリーランスが
              <br className="hidden sm:inline" />
              「売れる仕組み」を身につけ、安定収益を実現する
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-line px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-line/30 transition-all hover:scale-105 hover:bg-brand-line/90"
              >
                個別相談の案内をLINEで受け取る
              </a>
              <p className="mt-4 text-sm text-slate-400">
                ※ 無料相談・返品交換対応あり / 公式LINEに遷移します
              </p>
            </div>
          </div>

          {/* Right content - Instructor cards */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-md">
              {/* Main placeholder */}
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-slate-800/50 backdrop-blur">
                  <span className="text-slate-500">講師写真</span>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-8 top-1/4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-600" />
                  <div>
                    <p className="font-bold text-white">金本 相太</p>
                    <p className="text-xs text-slate-400">代表講師</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -right-8 bottom-1/4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-600" />
                  <div>
                    <p className="font-bold text-white">溝口 勇児</p>
                    <p className="text-xs text-slate-400">特別講師</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
