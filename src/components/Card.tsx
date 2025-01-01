'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const rotationRange = 50;
const halfRotationRange = rotationRange / 2;

export const Card2 = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${x}deg) rotateY(${y}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * rotationRange;
    const mouseY = (e.clientY - rect.top) * rotationRange;

    const rX = (mouseY / height - halfRotationRange) * -1;
    const rY = mouseX / width - halfRotationRange;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-72 h-48 rounded-xl bg-gradient-radial from-slate-100 to-slate-400 opacity-30 text-slate-100"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className="text-center text-2xl font-bold text-black"
        >
          Hello
        </p>
      </div>
    </motion.div>
  );
};

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const Card = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const xSpring = useSpring(x, { bounce: 0.1 });
  // const ySpring = useSpring(y, { bounce: 0.1 });
  const xSpring = useSpring(x, { stiffness: 100, damping: 10, mass: 1 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10, mass: 1 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = mouseY / height - HALF_ROTATION_RANGE * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
};

export const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative mt-10 w-96 h-60 border-slate-300 w rounded-xl bg-gradient-radial from-slate-100 to-slate-400 opacity-30 text-slate-100"
    >
      {/*<div*/}
      {/*  style={{*/}
      {/*    transform: 'translateZ(75px)',*/}
      {/*    transformStyle: 'preserve-3d',*/}
      {/*  }}*/}
      {/*  className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"*/}
      {/*>*/}
      {/*  <p*/}
      {/*    style={{*/}
      {/*      transform: 'translateZ(50px)',*/}
      {/*    }}*/}
      {/*    className="text-center text-2xl font-bold"*/}
      {/*  >*/}
      {/*    HOVER ME*/}
      {/*  </p>*/}
      {/*</div>*/}
    </motion.div>
  );
};
