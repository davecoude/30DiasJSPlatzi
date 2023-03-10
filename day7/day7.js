export function getStudentAverage(students) {
  // Tu código aquí 🤟🏻🔥
  const promedio = {
    classAvarage: 0,
    students: [],
  };

  students.forEach((item) => {

    const divider = item.grades.length;
    let sumAvarage = item.grades.reduce((a, b) => a + b);
    let studentAvarage = sumAvarage / divider;

    promedio.students.push({
      name: item.name,
      avarage: studentAvarage,
    });

    promedio.classAvarage = promedio.classAvarage + studentAvarage

  });

  const totalStudents = promedio.students.length
  promedio.classAvarage = Number((promedio.classAvarage / totalStudents).toFixed(2))

  return promedio
}
