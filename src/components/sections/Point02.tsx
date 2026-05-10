import { RefreshCw, LineChart, Handshake } from "lucide-react";

const reasons = [
  {
    icon: RefreshCw,
    title: "月額サブスク設計を習得",
    description:
      "単発案件から継続案件へ。月額型のサービス設計・提案方法を学び、安定収益モデルを構築します。",
  },
  {
    icon: LineChart,
    title: "安定収益モデルの確立",
    description:
      "毎月の収入に波がなくなり、事業計画が立てやすくなります。精神的な安定も手に入ります。",
  },
  {
    icon: Handshake,
    title: "提案からクロージングまで一貫",
    description:
      "サブスク型サービスの提案から契約締結まで、一連の流れを実践的に学べます。",
  },
];

export function Point02() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Point badge */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold text-white">
            POINT 02
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          <span className="text-amber-500">サブスク型ビジネス</span>で
          <br className="sm:hidden" />
          安定収益を実現
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
        <div className="mt-16 rounded-3xl bg-white p-8 shadow-sm lg:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* Avatar placeholder */}
            <div className="h-32 w-32 shrink-0 rounded-full bg-slate-300" />

            <div className="text-center lg:text-left">
              <p className="text-sm font-bold text-amber-500">CASE STUDY</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                サブスク型で年商3,000万円達成
              </h3>
              <p className="mt-2 text-slate-600">
                高野さん / SNS運用コンサルタント
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                「以前は単発案件ばかりで収入が不安定でした。WSSクラスでサブスク型の提案方法を学び、継続クライアントを10社以上獲得。今では年商3,000万円を安定して達成できています。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
