import { DefaultQuery } from "@/shared";

export type Review = {
  id: number;
  title: string;
  type: "Позитивный" | "Нейтральный" | "Негативный";
  author: string;
  date: Date;
  review: string;
};

export type ReviewsQuery = DefaultQuery<Review[]>;
