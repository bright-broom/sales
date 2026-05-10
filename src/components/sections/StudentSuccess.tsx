import { studentSuccessData } from "@/data/students";
import { ArrowRight } from "lucide-react";

export function StudentSuccess() {
  return (
    <section id="students" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
            受講生の成功事例
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            WSSクラスで学び、成果を出した受講生の声をご紹介します
          </p>
        </div>

        {/* Success cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentSuccessData.slice(0, 6).map((student) => (
            <div
              key={student.id}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Achievement badge */}
              <div className="inline-flex rounded-full bg-amber-100 px-3 py-1">
                <span className="text-sm font-bold text-amber-600">
                  {student.achievement}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {student.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                {student.summary}
              </p>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="h-10 w-10 rounded-full bg-slate-200" />
                <div>
                  <p className="font-medium text-slate-900">{student.name}</p>
                  <p className="text-sm text-slate-500">{student.role}</p>
                </div>
              </div>

              {/* Link */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-500 transition-colors group-hover:text-amber-600">
                  続きを読む
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
