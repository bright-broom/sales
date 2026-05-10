import { LINE_URL } from "@/lib/constants";

export function StepToChange() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Label */}
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-500">
          STEP TO CHANGE
        </p>

        {/* Heading */}
        <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          今日の一歩が、
          <br className="sm:hidden" />
          明日の大きな変化につながる
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          技術力があっても、営業ができなければ仕事は獲れない。
          <br className="hidden sm:inline" />
          でも、営業スキルを身につければ、
          <br className="hidden sm:inline" />
          あなたの技術は「武器」になります。
        </p>

        {/* Quote block */}
        <div className="relative mx-auto mt-10 max-w-2xl rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 p-[2px]">
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <p className="text-lg font-bold leading-relaxed text-slate-800 sm:text-xl">
              「営業スキル」という
              <span className="text-amber-500">一生の武器</span>
              を手に入れて、
              <br className="hidden sm:inline" />
              クライアントに選ばれ続ける人材へ
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-line px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-line/25 transition-all hover:scale-105 hover:bg-brand-line/90"
          >
            まずは無料相談から始める
          </a>
        </div>
      </div>
    </section>
  );
}
