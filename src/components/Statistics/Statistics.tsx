import { FC } from "react";
import { StatisticsProps } from "./types";

export const Statistics: FC<StatisticsProps> = ({ score }) => (
  <p>Вы закончили игру со счетом {score}</p>
);
