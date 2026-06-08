const GERMAN_GRADE_SCALE = [
  {
    id: "veryGood",
    minPercent: 85,
    maxPercent: 100,
    labels: { en: "very good", de: "sehr gut" },
    note: "1.2",
    noteRange: "1-1.5",
    badgeClass: "bg-green-100 text-green-800 border border-green-300",
    badgeStyle: { backgroundColor: "#dcfce7", color: "#166534", borderColor: "#86efac" },
  },
  {
    id: "good",
    minPercent: 70,
    maxPercent: 84,
    labels: { en: "good", de: "gut" },
    note: "2.0",
    noteRange: "1.6-2.5",
    badgeClass: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    badgeStyle: { backgroundColor: "#fef9c3", color: "#854d0e", borderColor: "#fde047" },
  },
  {
    id: "satisfactory",
    minPercent: 50,
    maxPercent: 69,
    labels: { en: "satisfactory", de: "befriedigend" },
    note: "2.6",
    noteRange: "2.6-3.5",
    badgeClass: "bg-rose-100 text-rose-800 border border-rose-300",
    badgeStyle: { backgroundColor: "#ffe4e6", color: "#9f1239", borderColor: "#fda4af" },
  },
  {
    id: "sufficient",
    minPercent: 30,
    maxPercent: 49,
    labels: { en: "sufficient", de: "ausreichend" },
    note: "3.6",
    noteRange: "3.6-4.5",
    badgeClass: "bg-amber-100 text-amber-800 border border-amber-300",
    badgeStyle: { backgroundColor: "#fef3c7", color: "#92400e", borderColor: "#fcd34d" },
  },
  {
    id: "inadequate",
    minPercent: 10,
    maxPercent: 29,
    labels: { en: "inadequate", de: "mangelhaft" },
    note: "4.6",
    noteRange: "4.6-5.5",
    badgeClass: "bg-orange-100 text-orange-800 border border-orange-300",
    badgeStyle: { backgroundColor: "#ffedd5", color: "#9a3412", borderColor: "#fdba74" },
  },
  {
    id: "insufficient",
    minPercent: 0,
    maxPercent: 9,
    labels: { en: "insufficient", de: "ungenuegend" },
    note: "5.6",
    noteRange: "5.6-6",
    badgeClass: "bg-rose-100 text-rose-800 border border-rose-300",
    badgeStyle: { backgroundColor: "#ffe4e6", color: "#9f1239", borderColor: "#fda4af" },
  },
];

function normalizeLocale(locale) {
  return locale === "de" ? "de" : "en";
}

function resolveLabel(labels, locale) {
  const normalizedLocale = normalizeLocale(locale);
  return labels[normalizedLocale] || labels.en;
}

function normalizeFivePointScore(value) {
  if (typeof value === "number") {
    return Math.min(5, Math.max(0, value));
  }

  if (typeof value === "string") {
    const parsed = parseFloat(value.replace(",", "."));
    if (!Number.isNaN(parsed)) {
      return Math.min(5, Math.max(0, parsed));
    }
  }

  return 0;
}

export function getGermanGrade(score, locale = "en") {
  const normalizedScore = normalizeFivePointScore(score);
  const percent = Number(((normalizedScore / 5) * 100).toFixed(1));

  const grade =
    GERMAN_GRADE_SCALE.find((item) => percent >= item.minPercent && percent <= item.maxPercent) ||
    GERMAN_GRADE_SCALE[GERMAN_GRADE_SCALE.length - 1];

  return {
    ...grade,
    label: resolveLabel(grade.labels, locale),
    score: normalizedScore,
    percent,
  };
}

export function getGermanGradeScale(locale = "en") {
  return GERMAN_GRADE_SCALE.map((grade) => ({
    ...grade,
    label: resolveLabel(grade.labels, locale),
  }));
}

export { GERMAN_GRADE_SCALE };
