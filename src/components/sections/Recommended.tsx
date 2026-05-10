const recommendations = [
  {
    tag: "クリエイター",
    title: "技術はあるけど営業が苦手な方",
    description:
      "デザイナー、コーダー、動画編集者など、制作スキルはあるけれど、仕事の獲得に苦戦している方に最適です。",
  },
  {
    tag: "フリーランス",
    title: "クラウドソーシング依存から脱却したい方",
    description:
      "単価の安い案件ばかりで疲弊している方。直案件の獲得方法を学び、収入を安定させたい方におすすめです。",
  },
  {
    tag: "副業",
    title: "本業以外の収入源を作りたい方",
    description:
      "会社員として働きながら、副業でスキルを活かして稼ぎたい方。効率的な営業手法を学べます。",
  },
  {
    tag: "起業志望",
    title: "将来的に独立・起業を目指す方",
    description:
      "いずれは自分のビジネスを持ちたい方。営業だけでなく、事業設計やマーケティングも学べます。",
  },
];

export function Recommended() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            こんな方におすすめ
          </h2>
        </div>

        {/* Recommendation cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:p-8"
            >
              {/* Tag */}
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-600">
                {rec.tag}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {rec.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-relaxed text-slate-600">
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
