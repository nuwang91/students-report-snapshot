export interface IClass {
  id: number;
  students: string[];
  name: string;
}

interface IAttempts {
  weeks: string[];
  values: number[];
}

export interface IActivity {
  id: number;
  content: string;
  attempts: IAttempts;
  student: string;
  time: string;
  skill: string;
  type: string;
}

export interface IFullActivity extends IActivity {
  result: number,
  date: string,
  color?: string
}

export interface IActivityResponse {
  statusCode: string;
  headers: {
    'Content-Type': string;
    'Access-Control-Allow-Origin': string;
  };
  body: string;
}
