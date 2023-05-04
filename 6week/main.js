const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Создайте поверхностную копию user
let copyUser = {...user};

// console.log(user === copyUser)
// console.log(user.friends === copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopy = {...user, friends: [...user.friends]};

// console.log(user === deepCopy);
// console.log(user.friends === deepCopy.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students];

// console.log(copyStudents === students)
// console.log(copyStudents[0] === students[0])

//4.Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}));

// console.log(deepCopyStudents === students)
// console.log(deepCopyStudents[0] === students[0])

//5. Отсортируйте массив студентов по успеваемости (sort)
let sortByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);

// console.log(sortByScores)

//5a. Отсортируйте студентов по алфавиту
let sortByName = deepCopyStudents.sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortByName)

//6.Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(st => st.scores >= 100)
// console.log(bestStudents)

//6a. Сформируйте массив из трех лучших студентов
console.log(deepCopyStudents)
// const topStudents = deepCopyStudents
// topStudents.splice(0,3)
// в таком случае topStudents будет состоять из лучших студентов

const topStudents = deepCopyStudents.splice(0, 3)
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents b topStudents так,
//чтоб сохранился порядок сортировки

const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// const newDeepCopyStudents = topStudents.concat(deepCopyStudents);
// console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов
// const notMarriedStudents = students.filter(el => el.isMarried !== true)
const notMarriedStudents = students.filter(el => !el.isMarried)
// console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов
const studentsNames = students.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой

const nameWithSpace = studentsNames.join(" ");
console.log(nameWithSpace);
const nameWithComma = studentsNames.join(", ");
console.log(nameWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map(el => ({...el, isStudent: true}));
console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students
const studentsWithMarriedNick = students.map(el => el.name === "Nick" ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann
const ann = students.find(el => el.name === "Ann")
console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el);
console.log(bestStudent)

//12a. Найдите 2 студента с самым высоким баллом
let best1 = students[0]
let best2 = students[0]

for (let i = 0; i < students.length; i++) {
    if (students[i].scores > best1.scores) {
        best1 = students[i]
    } else {
        if (students[i].scores > best2.scores) {
            best2 = students[i]
        }
    }
}

// console.log(best1, best2)

//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (students) => {
    return students.map(st => ({
        ...st,
        friends: students.map(st => st.name).filter(name => st.name !== name)
    }))
}

console.log(addFriends(students))

// Добавится массив студентов