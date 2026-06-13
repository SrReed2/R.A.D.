export interface Student {
  id: number;
  name: string;
  grade: number;
  attendance: number;
}

export const students: Student[] = [
  {
    id: 1,
    name: "Ana López",
    grade: 89,
    attendance: 95,
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    grade: 72,
    attendance: 80,
  },
  {
    id: 3,
    name: "María Torres",
    grade: 95,
    attendance: 99,
  },
  {
    id: 4,
    name: "Luis Pérez",
    grade: 60,
    attendance: 65,
  },
];