import { t } from "i18next";

export const shopOrderingHeaderList = [
  { id: "-cost_chance_count", content: t("Highest_Score"), checked: false },
  { id: "cost_chance_count", content: t("Lowest_Score"), checked: false },
  { id: "created_at", content: t("Newest"), checked: true },
];
