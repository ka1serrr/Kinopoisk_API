import { ReviewType } from "@/entities";

export const setBgDependsOnReviewType = (reviewType: ReviewType) => {
  if (reviewType === "Позитивный") {
    return "bg-green-positive";
  } else if (reviewType === "Негативный") {
    return "bg-red-negative";
  }

  return "bg-green-positive";
};
