"use client";

import { STATS } from "@/lib/constants";
import { curriculumData } from "@/data/curriculum";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { PlayCircle } from "lucide-react";

export function Point03Curriculum() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Point badge */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold text-white">
            POINT 03
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          <span className="text-amber-500">安心して学べる</span>
          <br className="sm:hidden" />
          充実のカリキュラム
        </h2>

        {/* Stats banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <PlayCircle className="h-8 w-8 text-amber-400" />
            <p className="text-2xl font-black text-white sm:text-3xl">
              動画コンテンツ
              <span className="ml-2 text-amber-400">{STATS.videos}</span>
              本以上
            </p>
          </div>
          <p className="mt-2 text-slate-400">
            いつでも・どこでも・何度でも学習可能
          </p>
        </div>

        {/* Curriculum accordion */}
        <div className="mt-12">
          <Accordion>
            {curriculumData.map((step) => (
              <AccordionItem
                key={step.step}
                title={`Step ${step.step}: ${step.title}`}
                defaultOpen={step.step === 1}
              >
                <div className="space-y-4">
                  <p className="text-slate-700">{step.description}</p>
                  <ul className="space-y-2">
                    {step.lessons.map((lesson, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">
                          {index + 1}
                        </span>
                        {lesson.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
