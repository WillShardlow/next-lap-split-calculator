import { Card, Card2, TiltCard } from '@/components/Card';
import React from 'react';

export default function LapSplitCalculator() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <Card />
      <Card2 />
      <TiltCard />
    </div>
  );
}
