'use server';

export type GoalPerformance = {
  raceDistanceInMeters: number;
  raceTimeInSeconds: number;
  splitDistanceInMeters: number;
};

export const calculateLapSplit = ({
  raceDistanceInMeters,
  raceTimeInSeconds,
  splitDistanceInMeters,
}: GoalPerformance) =>
  (raceTimeInSeconds * splitDistanceInMeters) / raceDistanceInMeters;
