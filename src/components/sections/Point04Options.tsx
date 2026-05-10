import { optionsData } from "@/data/options";
import { Check, CreditCard } from "lucide-react";

export function Point04Options() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Point badge */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold text-white">
            POINT 04
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          学びを加速させる
          <br className="sm:hidden" />
          <span className="text-amber-500">オプションサービス</span>
        </h2>

        {/* Options grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {optionsData.map((option) => (
            <div
              key={option.id}
              className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:p-8"
            >
              {/* Option number badge */}
              <div className="absolute -top-3 left-6 flex h-6 items-center rounded-full bg-slate-900 px-3">
                <span className="text-xs font-bold text-white">
                  Option {option.number}
                </span>
              </div>

              {/* Paid badge */}
              {option.isPaid && (
                <div className="absolute -top-3 right-6 flex h-6 items-center gap-1 rounded-full bg-amber-100 px-3">
                  <CreditCard className="h-3 w-3 text-amber-600" />
                  <span className="text-xs font-bold text-amber-600">有料</span>
                </div>
              )}

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {option.name}
                </h3>
                <p className="mt-1 text-sm text-amber-500">{option.subtitle}</p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {option.description}
                </p>

                {/* Conditions */}
                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    加入条件
                  </p>
                  <ul className="space-y-2">
                    {option.conditions.map((condition, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">
                          <span className="font-medium">{condition.label}:</span>{" "}
                          {condition.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
