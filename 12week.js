//stack LIFO

const a = () => {
}

const b = () => {
    a()
}

const c = () => {
    b()
}

c()


//EventLoop

//Example1
console.log("1");

setTimeout(function () {
    console.log("2")
}, 0);

setTimeout(function () {
    console.log("3")
}, 1000);

console.log("4")

setTimeout(function () {
    console.log("5")
}, 2000);

console.log("6")

//1 4 6 2 3 5


//Example2

console.log("start")

setTimeout(function timer() {
    console.log("timeout1")
}, 5000)

setTimeout(function timer() {
    console.log("timeout2")
}, 3000)

setTimeout(function timer() {
    console.log("timeout3")
}, 1000)

setTimeout(function timer() {
    console.log("timeout4")
}, 1000)

console.log("end")

//start end timeout3 timeout4 timeout2 timeout1


//Example3

setTimeout(() => {
    console.log(1)
})

new Promise(function (res, rej) {
    console.log(2)
    res()
})
    .then(() => {
        console.log(3)
    })

console.log(4)

//2 4 3 1


//Example 4

setTimeout(() => {
    console.log("s1")
}, 0)

setTimeout(() => {
    console.log("s2")
}, 1000)

new Promise(function (res, rej) {
    console.log("p1");
    res();
    console.log("p2")
}).then(() => {
    console.log("p3")
})

console.log("w1");

async function test1() {
    console.log("a1")
    await test2()
    console.log("a2")
}

async function test2() {
    console.log("a3")
}

test1();

console.log("w2");

// p1 p2 w1 a1 a3 w2 p3 a2 s1 s2


//Example 5

console.log(1)

setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
        console.log(3)
    })
})

new Promise((res, rej) => {
    console.log(4)
    res(5)
}).then((data) => {
    console.log(data)


    Promise.resolve().then(() => {
        console.log(6)
    }).then(() => {
        console.log(7)

        setTimeout(() => {
            console.log(8)
        }, 0)
    })
})

setTimeout(() => {
    console.log(9)
})

console.log(10)

//1 4 10
//5 6 7
//2 3 9 8
