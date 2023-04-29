const names = ["Donald", "Alex", "Bob"]
console.log(names.sort())
//1.сортирует строки "из коробки", т е без доп параметров

const names_2 = ["Donald", "alex", "aLEX", "игорь", "Юрий"]
console.log(names_2.sort())
//2. сортирует строки типо по алфавиту

console.log(names)
//3. работает мутабельно (сортирует массив на месте)

console.log(names.sort() === names)
//4. возвращает ссылку на исходный массив

const nums = [1000, 333, 9999, 77, -3]
console.log(nums.sort())
//5. Для остальных случаев необходимо параметром передать функцию сравнения
//(callback)

// const compFunc = (a, b) => { //по возрастанию
//     if(a > b) { //надо поменять местами
//         return 10
//     } else {
//         return -1
//     }
// }

const compFunc = (a, b) => a - b

console.log(nums.sort((a, b) => a - b))
console.log(nums.sort((a, b) => b - a))
console.log(nums.reverse())
//6. Функция сравнения должна возвращать число больше или меньше 0
//7. Вместе с sort часто используют reverse()

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    }
];

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 10
    } else {
        return -10
    }
}

// console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
//8. Сортировка массива по строковым значениям

console.log(students.sort((a, b) => a.age - b.age))
//9. Сортировка массива объектов по числовым значения

//bubble sort
const nums_2 = [100, 333, -3, 999, 77]
let count = 0
let replace = 0
for (let j = 0; j < nums_2.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums_2.length - 1 - j; i++) {
        count++
        if (nums_2[i] > nums_2[i + 1]) {
            replace++
            // let temp = nums_2[i+1]
            // nums_2[i+1] = nums_2[i]
            // nums_2[i] = temp
            [nums_2[i], nums_2[i + 1]] = [nums_2[i + 1], nums_2[i]]
            isSorted = false
        }
    }
    if (isSorted) break
}


console.log(nums_2)
console.log(count)
console.log(replace)

