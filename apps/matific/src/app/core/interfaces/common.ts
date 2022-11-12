export interface IClass{
  id: number,
  students: string[],
  name: string
}

interface IAttempts {
  weeks: string[],
  values: number[]
}

export interface IActivities{
  id: number,
  content: string,
  attempts: IAttempts,
  student: string,
  time: string,
  skill: string,
  type: string
}
