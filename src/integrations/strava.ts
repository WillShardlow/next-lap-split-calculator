'use server';

const stravaApiPath = 'https://www.strava.com/api/v3';

export type AthleteInformationResponse = {
  id: number;
  username: string;
  // resourceState: number; //indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
  firstname: string;
  lastname: string;
  city: string;
  // state: string;
  country: string;
  sex: string;
  // premium: boolean; //has premium subscription
  // createdAt: Date;
  // updatedAt: Date;
  // badgeTypeID: number;
  // profileMedium: string;
  // profile: string;
  // friend: null;
  // follower: null;
  // followerCount: number;
  // friendCount: number;
  // mutualFriendCount: number;
  // athleteType: number;
  datePreference: string;
  measurementPreference: string;
  // clubs: Array<any>;
  // ftp: number; //functional threshold power
  weight: number;
  // bikes: Array<Bike>;
  shoes: Array<Shoe>;
};

type Shoe = {
  id: string;
  primary: boolean;
  name: string;
  resourceState: number;
  distance: number;
};

export const getDeveloperAthleteInformation =
  async (): Promise<AthleteInformationResponse> => {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAVA_API_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(`${stravaApiPath}/athlete`, options);

    return (await response.json()) as AthleteInformationResponse;
  };

const clientId = '116164';
const clientSecret = '09ffbead0aa6d8107335a9b21a200365ea97ce0e';

const refreshToken = '63e9b19e0aa175261c871389ef0adc84c4d97a35';
const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

const callAthlete = `${stravaApiPath}/athlete/?access_token=`;

type accessAndRefreshResponse = {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: AthleteInformationResponse;
};

export const getAccessAndRefreshToken = async (code: string) => {
  //could pull out func for nce api call

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`,
    options,
  );

  return (await response.json()) as accessAndRefreshResponse;
};

export const getAthleteInformation = async (code: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const accessToken = (await getAccessAndRefreshToken(code)).access_token;

  const response = await fetch(callAthlete + accessToken, options);

  return (await response.json()) as AthleteInformationResponse;
};
