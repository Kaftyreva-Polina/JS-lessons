// лексическое окружение, замыкание, рекурсия
//{a: 5} globalLE
// {foo: Function, a: undefined}
// const car = 'bmv'
//
// //const startEngine = () => {
//     console.log(`Start ${car}`)
// }
//
// startEngine()

foo()

var a = '1' //{foo: Function, a: '1'}
const b = '2' //{foo: Function, a: '1', b: '2'}
let c = '3' //{foo: Function, a: '1', b: '2', c: '3'}

function foo () {
    console.log('Hello foo')
}

const bar = function() { //{foo: Function, bar: Function, a: '1', b: '2', c: '3'}
    console.log('Hello bar')
}

const baz = () => {
    console.log('Hello baz') // {foo: Function, bar: Function, baz: Function, a: '1', b: '2', c: '3'}
}

bar()
baz()

//globalLE {environment --> null}

let car = 'bmw' //{car: 'bmv'}

const startEngine = () => { //{car: 'bmv, startEngine: Function}
    //Environment --> globalLE
    //startEngine {}
    console.log(`Start ${car}`)
}

startEngine() //{car: 'audi', startEngine: Function}
car = 'audi' //{car: 'audi', startEngine: Function}

let car1 = 'bmw' // {car: 'bmw'}

const startEngine1 = () => { //{car: 'bmv, startEngine: Function}
    //Environment --> globalLE
    //startEngine {}
    // const car1 = 'toyota' // startEngineLE {car: 'toyota'}
    const foo = () => { //startEngineLE {foo: Function}
        // Environment --> startEngineLE
        // fooLE{}
        console.log(`Start ${car1}`)
    }
    foo()
}

startEngine1() //{car: 'audi', startEngine1: Function}
car1 = 'audi'// {car: 'audi', startEngine1: Function}
foo() // globalLE {car: 'bmw', startEngine1: Function}

// Пример замыкания
const counter = () => { //globalLE {counter: Function}
    //environment --> globalLE
    //counter1LE {count: 0}
    //counter2LE {count: 0}
    let count = 0 //counterLE {count: 1}  и с каждым проходом count будет сохраняться и увеличиваться
    return () => {
        //environment --> counter1LE
        //environment --> counter2LE


        //environment --> counterLE // лексич окружение count продолжит жить, потому что есть эта ссылка
        //{} это лексическое окружение удалится после отработки
        console.log(++count)
    }
}

// const count1 = counter() // //globalLE {counter: Function, count1: Function}

// count1() //1
// count1() //2
// count1() //3

// const a = counter()
// a() || counter()()

const count1 = counter() //globalLE {counter: Function, count1: Function}
const count2 = counter() //globalLE {counter: Function, count2: Function}

count1() //1
count1() //2
count1() //3

count2() //1
count2() //2
count2() //3

// Так как лексическое окружение разное



let count = 0 //globalLE
const counter1 = () => { //globalLE {counter: Function, count: 0(будет увеличиваться с каждым вызовом)}
    //environment --> globalLE
    //counter1LE {}
    //counter2LE {}
    return () => {
        //environment --> counter1LE
        //environment --> counter2LE
        console.log(++count)
    }
}

const count1_2 = counter1() //globalLE {counter: Function, count1: Function}
const count2_2 = counter1() //globalLE {counter: Function, count2: Function}

count1_2() //1
count1_2() //2
count1_2() //3

count2_2() //4
count2_2() //5
count2_2() //6

// Замыкание -способность функции в каком лексическом окружении она была создана (не вызвана, а создана)

//Ссылка на внешнее лексическое окружение создается во время инициализации,
// а внутрннее лексическое окружение создается в момент выполнения функци.
// На каждое выполнение функции создается новое лексическое окружение.
// Но если на внутреннее лексическое окружение, которе было создано в момент выполнения функции, где-то создалась ссылка
// на это внутренне окружение (на объект), то оно не удаляется сборщиком мусора, и на второй вызов будет использовано
// то лексическое окружение, которое уже существует (на который есть ссылка)

// САНКИ В REACT

const thunkCreator = (userId) => {
    //thunkCreatorLE {userId: 1}
    const thunk = (dispatch, getState) => {
        console.log(userId)
    }
    return thunk
}

const thunk1 = thunkCreator(1)
const thunk2 = thunkCreator(2)

thunk1()
thunk2()

//Получим разные значения

//РЕКУРСИЯ
//должен быть шаг рекурсии; на каждом шаге уменьшаем степень
// и условия выхода из рекурсии (база рекурсии)

//Возведение в степень

const pow = (x, n) => {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n-1)
    }
}

console.log(pow(2,3))