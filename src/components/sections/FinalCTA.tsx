import { LINE_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 py-20 lg:py-28">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
          今、行動しないと
          <br />
          <span className="underline decoration-white/50 decoration-4 underline-offset-8">
            1年後も同じ状況
          </span>
          かもしれません
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          「いつかやろう」と思っていることは、大抵やらないまま終わります。
          <br />
          今日の小さな一歩が、あなたの未来を大きく変えます。
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-2xl transition-all hover:scale-105 hover:bg-white/90"
          >
            今すぐ無料相談に申し込む
          </a>
          <p className="mt-4 text-sm text-white/70">
            ※ 公式LINEに遷移します / 無理な勧誘は一切ありません
          </p>
        </div>
      </div>
    </section>
  );
}
