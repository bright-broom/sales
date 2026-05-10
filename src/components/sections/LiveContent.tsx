import { liveContentData } from "@/data/liveContent";
import {
  Briefcase,
  Target,
  MessagesSquare,
  Brain,
  Share2,
  Zap,
  Layout,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  target: Target,
  "messages-square": MessagesSquare,
  brain: Brain,
  instagram: Share2,
  zap: Zap,
  layout: Layout,
  palette: Palette,
};

export function LiveContent() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            LIVE内容ジャンル
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            毎週開催されるLIVEで学べる8つのカテゴリ
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {liveContentData.map((category) => {
            const Icon = iconMap[category.icon] || Briefcase;
            return (
              <div
                key={category.id}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-amber-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
