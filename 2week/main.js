let students = [
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
        scores: 89,
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
    }
];

// const names = []
// for (let i = 0; i < students.length ; i++) {
//     names[i] = students[i].name
// }
//
// console.log(names)

const getScores = item => item.scores
const getName = item => item.name

const getStNames = (array) => {
    const result = []
    const getName = item => item.name
    for (let i = 0; i < array.length ; i++) {
        result[i] = getName(array[i])
    }
    return result
}

const getStScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores(array[i])
    }
    return result
}

const getNewArray = (array, func) => {  //самодельная модель map
    const result = []
    for (let i = 0; i<array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getNewArray(students, getName))

console.log(getStNames(students))
console.log(students.map(getName)) //передача функции в качестве параметра, getName это колбэк

//Колбэк мыне вызываемБ а где-то под копотом нью эрей сама решает когда ее вызывать

// const addProp = item =>  {
//     item.isStudent = true
//     return item
// }
//В этом случае мы получил новый массивБ но с ссылками на старый объект


//То что функция ретурнит у нас попадет в новый массив под таким же индексом
//isStudent это свойство которое мы добавляем
// const addProp = item =>  {
//     const copy = {...item}
//     copy.isStudent = true
//     return copy
// }

const addProp = item =>  ({...item, isStudents: true})
// То же самое, что запись выше, но более современный синтаксис
// Новый массив, в котором будут лежать новые объекты


// filter
const itPush = (array, el) =>{
    array[array.length] = el
    return array.length
}


const itFilter = (array, func) => {
    const result =[]
    for (let i = 0; i < array.length; i++) {
        if(func(array[i]) === true) {
            itPush(array, array[i])
        }
    }
    return result
}

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length ; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}


const itUnShift = (array, item) => {
    for (let i = array.length-1; i >= 0; i--) {
        array[i+1] = array[i]
    }
    array[0] = item
    return array.length
}
//добавить первый

const itShift = (array) => {  //удалить 1элемент
    const removeItem = array[0]
    for (let i = 0; i < array.length ; i++) {
        array [i] = array[i + 1]
    }
    array.length = array.length - 1
    return removeItem
}

// const nums = [1,2,3,4,5]
const nums = new Array(1,2,3,4,5)
itShift(nums)
console.log(nums)

nums.map(el => el **2)
    .filter(el => el < 20)
    .reverse()
    .pop()

console.dir(Array)


// function getLength() {
//     return this.length
// }
//
// Array.prototype.hey = getLength //расширили стандартный prototype объекта

Array.prototype.hey = function () {
    return this.length
}

const arr = [] // new Array()
console.log(arr.hey())

const arr2 = [1,2,3,4]
console.log(arr2.hey())


Array.prototype.getAllValues = function (key) {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i][key])  //синтаксис вычисляющий свойства объектов
    }
}

students.getAllValues("name")