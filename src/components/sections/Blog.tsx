const blogPosts = [
  {
    id: "1",
    category: "営業ノウハウ",
    title: "営業未経験から3ヶ月で月収100万円を達成した方法",
    date: "2026.01.15",
  },
  {
    id: "2",
    category: "成功事例",
    title: "フリーランスデザイナーが直案件を獲得するまでの道のり",
    date: "2026.01.12",
  },
  {
    id: "3",
    category: "ビジネス戦略",
    title: "サブスク型ビジネスモデルの設計方法【完全ガイド】",
    date: "2026.01.10",
  },
  {
    id: "4",
    category: "マインドセット",
    title: "営業の苦手意識を克服する5つのステップ",
    date: "2026.01.08",
  },
  {
    id: "5",
    category: "SNS運用",
    title: "Instagram運用で見込み客を獲得する実践テクニック",
    date: "2026.01.05",
  },
  {
    id: "6",
    category: "イベント",
    title: "【開催レポート】第12回オフラインセミナー in 東京",
    date: "2026.01.03",
  },
  {
    id: "7",
    category: "お知らせ",
    title: "2026年1月のLIVE配信スケジュールを公開しました",
    date: "2026.01.01",
  },
  {
    id: "8",
    category: "営業ノウハウ",
    title: "クロージング成功率を2倍にする質問テクニック",
    date: "2025.12.28",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            ブログ・お知らせ
          </h2>
        </div>

        {/* Blog grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
            >
              {/* Category tag */}
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-bold leading-snug text-slate-900 line-clamp-2 group-hover:text-amber-500">
                {post.title}
              </h3>

              {/* Date */}
              <p className="mt-3 text-sm text-slate-400">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
