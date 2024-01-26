'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import { calculateLapSplit, GoalPerformance } from '@/app/calculateLapSplit';
import { useState } from 'react';

export default function LapSplitCalculator() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GoalPerformance>({ mode: 'onChange' });

  const [lapPace, setLapPace] = useState<number>();

  const onSubmit: SubmitHandler<GoalPerformance> = (data) =>
    setLapPace(calculateLapSplit(data));

  return (
    <div className="flex-col items-center justify-center mx-auto max-w-2xl">
      <h1 className="flex mb-4 items-center text-2xl">Lap Split Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
        <Input
          label="Race distance (m)"
          defaultValue={1500}
          {...register('raceDistanceInMeters', {
            required: true,
            valueAsNumber: true,
          })}
        />
        <Input
          label="Race time (s)"
          defaultValue={4 * 60}
          {...register('raceTimeInSeconds', {
            required: true,
            valueAsNumber: true,
          })}
        />
        <Input
          label="Split distance (m)"
          defaultValue={400}
          {...register('splitDistanceInMeters', {
            required: true,
            valueAsNumber: true,
          })}
        />
        <button type="submit" className="mt-2">
          Submit
        </button>
        {lapPace && <h1 className="text-9xl">{lapPace}</h1>}
      </form>
    </div>
  );
}
