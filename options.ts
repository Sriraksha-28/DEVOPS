type Student = {
  name: string;
  age: number;
  email?: string;
};

const student1: Student = {
  name: "Sriraksha",
  age: 21
};

const student2: Student = {
  name: "Rahul",
  age: 22,
  email: "rahul@gmail.com"
};

console.log(student1);
console.log(student2);