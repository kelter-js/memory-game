import { CardData } from "../types";

const STEP = 0.5;

export const shuffle = (data: CardData[]) =>
  data.sort(() => Math.random() - STEP);
