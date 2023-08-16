// string, number, boolean, null, undefined, NaN -примитивы
// array, object, function - объекты

//1. Более сложная структура
//2. Ссылочный тип данных
//3. Имеют свойства и методы


let str = "yo!!!"
let str2 = str
str2 = null


const user = {  // #123
    name: "Bob",
    age: 34
}
//1. new Object()
//2. {}
const user2 = user //#123
user2.name = "Alex"
console.log(user)


const copyUser = {...user}
// copyUser.name = user.name
// copyUser.age = user.age

console.log(user === user2) // true
console.log(user === copyUser) // false
console.log(copyUser)

const arr = [1,2,3,4,5]
const copyArr = [...arr]

// объект => создаем копию => вносим изменения в копию => используем копию

const students = [
    {
        name: "Bob",
        age: 34,
        friends: [
            {name: "John"},
            {name: "Василий"} //"Василий" => "Василиса"
        ]
    },
    {
        name: "Alex",
        age: 32,
        friends: [
            {name: "Олег"},
            {name: "Петр"},
        ]},
]

// students[0] => ссылка #234
// students[1] => ссылка #345

const copyStudents = [...students]// shallow
console.log(students === copyStudents) // false
console.log(students[0] === copyStudents[0]) // true

const deepCopy = [{...students[0]}, {...students[1]}]

console.log(students === deepCopy) // false
console.log(students[0] === deepCopy[0]) // false

const deepCopyWithMap = students.map(st => ({...st}))

// const deepCopyWithMap =students.map((st) => {
//     return {...st}
// })


//CRUD
const addSt = [...students, {name: 'Anna', age: 28}]
const updateBobAge = students.map(st => st.name === "Bob" ? {...st, age: 35} : st) //условное преобразование
const removeSt = students.filter(st => st.name !== "Bob")


const newSt = students.map(st => st.name === "Bob"
    ? {...st, friends: st.friends.map(f => f.name === "Василий"
            ? {...f, name: "Василиса"}
            : f
        )}
    : st)