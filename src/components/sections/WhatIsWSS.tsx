import { BookOpen, Video, Briefcase } from "lucide-react";

const features = [
  {
    number: "01",
    icon: BookOpen,
    title: "完全な営業初心者でも安心して学べる",
    description:
      "基礎の基礎から丁寧に解説。専門用語も分かりやすく説明するので、営業経験ゼロでも大丈夫。段階的にステップアップできるカリキュラムで、着実にスキルが身につきます。",
  },
  {
    number: "02",
    icon: Video,
    title: "疑問を定期LIVEで「すぐ」解決 安心の学習体制",
    description:
      "週次のLIVE配信で講師に直接質問可能。一人で悩まず、リアルタイムで疑問を解消できます。録画も残るので、忙しい方も後から視聴OK。",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "総合的なビジネススキルが身につく",
    description:
      "営業だけでなく、マーケティング、ブランディング、事業設計まで。フリーランス・起業家として必要なビジネススキルを総合的に習得できます。",
  },
];

export function WhatIsWSS() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            WSSクラスとは？
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            営業の「仕組み化」に特化した実践型プログラム
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Number badge */}
              <div className="absolute -top-4 left-8 flex h-8 items-center justify-center rounded-full bg-slate-900 px-4">
                <span className="text-sm font-bold text-white">
                  {feature.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100">
                <feature.icon className="h-7 w-7 text-amber-600" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
