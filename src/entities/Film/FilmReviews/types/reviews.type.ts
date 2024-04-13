import { DefaultQuery } from "@/shared";

export type ReviewType = "Позитивный" | "Нейтральный" | "Негативный";

export type Review = {
  id: number;
  title: string;
  type: ReviewType;
  author: string;
  date: string;
  review: string;
};

export type ReviewsQuery = DefaultQuery<Review[]>;
