const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    },
  }
];

const getSubjects = (student => {
  const subjects = Object.keys(student.subjects).map(subject => {
    return subject[0].toUpperCase() + subject.slice(1).replace("_", " ");
  });

  return subjects;
});

const getAverageMark = (student => {
  const arrOfMarks = Object.values(student.subjects).flat();
  const studentAverageMarks = arrOfMarks.reduce((studentshMarks, mark) => {
    return studentshMarks + mark;
  });
    
  return +(studentAverageMarks/arrOfMarks.length).toFixed(2);
});

const getStudentInfo = (student => {
  const studentInfo = {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
  };

  return studentInfo;
});

const getStudentsNames = (students => {
  const studentsNames = Object.keys(students).reduce((studentsNames, i) => {
    return [...studentsNames, Object.values(students[i].name).join('')];
  }, []);

  return studentsNames.sort();
});

const getBestStudent = (students => {
  const studentsObj = {...students};
  const studentsAverageMarks = Object.values(studentsObj).map((e, i) => {
    return getStudentInfo(students[i]).averageMark;
  });
  const indexOfBestAverageMark = studentsAverageMarks.indexOf(Math.max(...studentsAverageMarks));

  return Object.values(studentsObj[indexOfBestAverageMark].name).join("");
});

const calculateWordLetters = (words => {
  return words.toLowerCase().split('').reduce((total, letter, i, arr) => {
      total[letter] = arr.filter(letterInArr => letterInArr === letter).length;
      return total;
  }, {});
});


console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("цИКлоПентАнпеРгідРофеНанТрен"));