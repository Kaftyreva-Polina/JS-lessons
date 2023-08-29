fetch("https://google.com/?query=js")
    .then((data) => {
        console.log(data.url)
    })
    .then(() => {
        return fetch("https://bing.com/?query=js")
    })
    .then((data) => {
        console.log(data.url)
        return fetch("https://duckduckgo.com/?query=js")
    })
    .then((data) => {
        console.log(data.url)
    })
    .catch((err) => {
        console.error('ERROR', err);
    })

//ALL

const pr1 = fetch("https://duckduckgo.com/?query=js")
const pr2 = fetch("https://bing.com/?query=js")
const pr3 = fetch("https://google.com/?query=js")

Promise.all([pr3, pr2, pr1])
    .then((data) => {
        // console.log(data[0].url)
        // console.log(data[1].url)
        // console.log(data[2].url)
        console.log(data)
    })
    .catch((err) => {
        console.log("Error", err)
    })

Promise.all([
    fetch("https://duckduckgo.com/?query=js"),
    fetch("https://bing.com/?query=js"),
    fetch("https://google.com/?query=js")
])
    .then((data) => {
        // console.log(data[0].url)
        // console.log(data[1].url)
        // console.log(data[2].url)
        console.log(data)
    })
    .catch((err) => {
        console.log("Error", err)
    })

//RACE

Promise.race([
    fetch("https://duckduckgo.com/?query=js"),
    fetch("https://bing.com/?query=js"),
    fetch("https://google.com/?query=js"),
    new Promise((res, rej) => {
        setTimeout(() => {
            rej("error from setTimeout")
        }, 500)
    })
])
    .then((data) => {
        console.log("DATA", data.url);
    })
    .catch((err) => {
        console.log("ERROR", err);
    })

// ANY
Promise.any([
    fetch("https://duckduckgo.com/?query=js"),
    fetch("https://bing.com/?query=js"),
    fetch("https://google.com/?query=js")
]).then((data) => {
    console.log(data.url)
}).catch((err) => {
    console.log(err)
})

//ALLSETLED

Promise.allSettled([
    fetch("https://duckduckgo.com/?query=js"),
    fetch("https://bing.com/?query=js"),
    fetch("https://google.com/?query=js")
])
.then((settleData) => {
    console.log(settleData)
})
.catch((err) => {
    console.log("ERROR", err)
})

//ASYNC/AWAIT

const asyncFn = async () => {
    const data = await fetch("https://google.com/?query=js")
    console.log(data)
}

asyncFn()

// console.log(await fetch("https://google.com/?query=js")); //во фронте не работает

// try {
//     const data2 = await  fetch("https://bing.com/?query=js")
//     console.log(data2.url);
//     const data3 = await  fetch("https://google.com/?query=js")
//     console.log(data3.url);
//     const data1 = await  fetch("https://duckduckgo.com/?query=js")
//     console.log(data1.url)
// }


const foo = async () => {
    try {
        const googleData = await fetch("https://google.com/?query=js")
        console.log(googleData.url)
        const duckData = await fetch("https://duckduckgo.com/?query=js")
        console.log(duckData.url)
        const bingData = await fetch("https://bing.com/?query=js")
        console.log(bingData.url)
        // setAllData([googleData, duckData, bingData])
        console.log("all good")
    } catch (err) {
        console.log("ERROR", err);
    } finally {
        console.log("FINALLY")
    }
}

foo()

// const promise = foo()
//
// promise
//     .then((smth) => {
//         console.log(smth)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
