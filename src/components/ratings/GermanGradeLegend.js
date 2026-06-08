import { getGermanGradeScale } from "@/utils/germanGrades";

export default function GermanGradeLegend({ locale = "en" }) {
  const scale = getGermanGradeScale(locale);
  const title = locale === "de" ? "Bewertungsskala" : "Rating Scale";
  const percentLabel = locale === "de" ? "PROZENT" : "PERCENT";
  const evaluationLabel = locale === "de" ? "BEWERTUNG" : "EVALUATION";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-primary-700 px-4 py-3">
        <h3 className="text-white text-sm sm:text-base font-bold uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="bg-primary-800/5 border-b border-gray-200">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-700">{percentLabel}</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-700">{evaluationLabel}</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-700">NOTE*</th>
            </tr>
          </thead>
          <tbody>
            {scale.map((grade, index) => (
              <tr key={grade.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 text-sm text-gray-800">{grade.maxPercent}-{grade.minPercent}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold border ${grade.badgeClass}`} style={grade.badgeStyle}>
                    {grade.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">{grade.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
