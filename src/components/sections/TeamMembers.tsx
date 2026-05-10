const mainMembers = [
  {
    name: "金本 相太",
    role: "代表講師 / 創業者",
    description:
      "営業歴15年以上。大手企業での営業経験を経て、フリーランス・起業家向けの営業スクールを設立。「仕組み化された営業」をコンセプトに、1,500名以上の受講生を指導。",
  },
  {
    name: "溝口 勇児",
    role: "特別講師",
    description:
      "連続起業家。複数の事業を立ち上げ、売却経験あり。ビジネス戦略、資金調達、事業拡大のノウハウを教える特別講師として参画。",
  },
];

const subMembers = [
  {
    name: "宮本 慶太",
    role: "営業講師",
  },
  {
    name: "こゆ太",
    role: "SNS運用講師",
  },
  {
    name: "ジェニー",
    role: "デザイン講師",
  },
];

export function TeamMembers() {
  return (
    <section id="team" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            運営メンバー・講師
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            現場で成果を出してきたプロフェッショナルが直接指導します
          </p>
        </div>

        {/* Main members */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {mainMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Avatar placeholder */}
                <div className="h-24 w-24 shrink-0 rounded-full bg-slate-200" />

                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber-500">
                    {member.role}
                  </p>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub members */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {subMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4"
            >
              <div className="h-14 w-14 shrink-0 rounded-full bg-slate-200" />
              <div>
                <h3 className="font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
