import {
  UserX,
  TrendingDown,
  Settings,
  Compass,
} from "lucide-react";

const targets = [
  {
    icon: UserX,
    title: "営業に苦手意識がある",
    description: "技術には自信があるけど、売り込みが苦手でクライアント獲得に苦戦している方",
  },
  {
    icon: TrendingDown,
    title: "成果が安定せず、再現性に悩んでいる",
    description: "たまに受注できても続かない、収入の波が大きくて不安を感じている方",
  },
  {
    icon: Settings,
    title: "営業を「感覚」ではなく「仕組み」で身につけたい",
    description: "感覚や才能ではなく、誰でも再現できる方法論を学びたい方",
  },
  {
    icon: Compass,
    title: "選択肢を広げたい",
    description: "会社員・経営者・独立検討中など、キャリアの選択肢を増やしたい方",
  },
];

export function TargetAudience() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            このような方に向いています
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {targets.map((target, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <target.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {target.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {target.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            ※
            とにかく安く学びたい方、実践よりも情報収集だけしたい方には向いていません
          </p>
        </div>
      </div>
    </section>
  );
}
