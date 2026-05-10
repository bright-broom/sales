const endorsers = [
  {
    name: "箕輪 厚介",
    role: "幻冬舎 編集者",
    quote:
      "営業力は、すべてのビジネスの土台。技術があっても売れなければ意味がない。WSSクラスは、その本質を教えてくれる場所だと思います。",
  },
  {
    name: "西崎 康平",
    role: "トゥモローゲート株式会社 代表取締役",
    quote:
      "「売れる人」と「売れない人」の差は、才能ではなく仕組みの有無。WSSクラスで学べる営業の型は、一生使える財産になるはずです。",
  },
];

export function Endorsements() {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-28">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
            推薦者の声
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {endorsers.map((endorser, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* Quote */}
              <p className="text-lg leading-relaxed text-slate-300">
                「{endorser.quote}」
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-slate-700" />
                <div>
                  <p className="font-bold text-white">{endorser.name}</p>
                  <p className="text-sm text-slate-400">{endorser.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
