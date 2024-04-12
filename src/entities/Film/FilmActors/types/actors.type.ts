import { DefaultQuery } from "@/shared";

export type Actor = {
  id: number;
  name: string;
  photo: string;
  age: number;
  sex: string;
};

export type ActorsQuery = DefaultQuery<Actor[]>;
