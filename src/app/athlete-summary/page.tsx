'use client';

import { getAthleteInformation } from '@/integrations/strava';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AthleteSummary() {
  const [name, setName] = useState('');
  const searchParams = useSearchParams();

  const code = searchParams.get('code') ?? 'broken';

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const athleteInfo = await getAthleteInformation(code);
        setName(athleteInfo.firstname);
      }
    };

    fetchData();
  }, [code]);

  return (
    <>
      <p>{`Hello my name is ${name}`}</p>
      <p>{`The code is ${code}`}</p>
      <a
        rel="noopener noreferrer"
        href="https://www.strava.com/oauth/authorize?client_id=116164&response_type=code&redirect_uri=http://localhost:3000/athlete-summary&approval_prompt=force&scope=read_all"
      >
        Authorise
      </a>
    </>
  );
}
