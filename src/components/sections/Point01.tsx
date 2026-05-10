import { GraduationCap, Target, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "基礎から段階的に学べる",
    description:
      "営業未経験でも安心。マインドセットから実践テクニックまで、ステップバイステップで習得できます。",
  },
  {
    icon: Target,
    title: "スキルを武器に直案件を獲得",
    description:
      "クラウドソーシングに頼らず、自分で見込み客を開拓し、直接クライアントと契約するスキルが身につきます。",
  },
  {
    icon: MessageSquare,
    title: "実践さながらのロールプレイング",
    description:
      "実際の商談を想定したロールプレイで、本番で使える提案力・クロージング力を磨きます。",
  },
];

export function Point01() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Point badge */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold text-white">
            POINT 01
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          未経験から
          <span className="text-amber-500">直案件獲得</span>を
          <br className="sm:hidden" />
          目指せる
        </h2>

        {/* Reasons */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                <reason.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Reason {index + 1}
              </h3>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {reason.title}
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case study */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* Avatar placeholder */}
            <div className="h-32 w-32 shrink-0 rounded-full bg-slate-300" />

            <div className="text-center lg:text-left">
              <p className="text-sm font-bold text-amber-500">CASE STUDY</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                入会2ヶ月で56万円の直案件を獲得
              </h3>
              <p className="mt-2 text-slate-600">
                鈴木さん / Webデザイナー
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                「営業が苦手で、ずっとクラウドソーシング頼みでした。WSSクラスで学んだ提案術を実践したところ、2ヶ月目で56万円の直案件を獲得。今では単価も上がり、安定して仕事が入るようになりました。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
