const todoListId_1 = "23hf-76jh"
const todoListId_2 = "98kh-md09"

const todoList = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: "all"
    },
    {
        id: todoListId_2,
        title: "What to buy",
        filter: "all"
    }
]

const tasks = {
    [todoListId_1]: [
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS/TS", isDone: false}
    ],
    [todoListId_2]: [
        {id: 4, title: "HTML", isDone: false},
        {id: 5, title: "HTML", isDone: false},
        {id: 6, title: "HTML", isDone: false}
    ],
    [10 + 30]: [] //"40"
}

// console.log(tasks[todoList[0].filter(t => t.id !== 1)])

//reduce => свертка => одно значение

const nums = [2, 4, 6, 3, 5]

nums.reduce((acc, el) => {
    return acc + el
}, 0)

//0, 2 => 2
//2, 4 => 6
//6, 6 => 12
//12, 3 => 15
//15, 5 => 20
//=>20

nums.reduce((acc, el) => acc > el ? acc : el)
//2, 2 => 2
//2, 4 => 4
//4, 6 => 6
//6, 3 => 6
//6, 5 => 6
//=> 6

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

const newData = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "2": {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    }
}

const data = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(data)

const st20 = students.map(s => ({...s, scores: s.scores + 20}))
console.log(st20)

// const st20reduce = students.reduce((acc, el) => {
//     const copy = {...el}
//     copy.scores = el.scores + 20
//     acc.push(copy)
//     return acc
// }, [])

const st20reduce = students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 20})
    return acc
}, [])