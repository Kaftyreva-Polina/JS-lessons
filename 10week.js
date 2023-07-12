// promise

//callbacksHell example

fetch("https://shop/autors", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        fetch("https://shop/autors//65", (err, data) => {
            if (err) {
                console.log(err)
            } else {
                fetch("https://shop/autors//65/books", (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fetch("https://shop/autors//65/books/23", (err, data) => {
                            if (err) {
                                console.log(err)
                            } else {
                                fetch("https://shop/autors//65/books/23/356", (err, data) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                    }
                                })
                            }

                        });
                    }
                });
            }
        });
    }
});

fetch("https://shop/autors")
    .then((data) => {
        return fetch("https://shop/autors//65")
    })
    .then((data) => {
        return fetch("https://shop/autors//65/books")
    })
    .then((data) => {
        return fetch("https://shop/autors//65/books/23")
    })
    .then((data) => {
        return fetch("https://shop/autors//65/books/23/356")
    })
    .catch((err) => {
        console.log(err)
    })


// pending || fulfilled || rejected

const server = {
    getData(url) {
        // const promise = new Promise((res, rej) => {}
        return new Promise((res, rej) => {
            setTimeout(() => {
                const data = {};
                res(data)
            }, 2000)
        });
    }
}

const promise = server.getData();

// console.log(promise);

// const fs = require('fs')
// require только к модульным файлам
//
// const server1 = {
//     getData(url) {
//         return new Promise((res, rej) => {
//             fs.readFile('./index.js', (err, data) => {
//                 if (err) {
//                     rej(err)
//                 } else {
//                     res(data)
//                 }
//             })
//         });
//     }
// }
//
// const promise1 = server1.getData()
// console.log(promise1)


class MyPromise {
    constructor(callback) {
        this.callback = callback
    }
    resolve(data) {
        return {
            PromiseState: "fulfilled",
            PromiseResult: data
        }
    }
    reject(err) {
        return {
            PromiseState: "rejected",
            PromiseResult: err
        }
    }
    callback(resolve, reject);
}


//! Свой промис min
const pr = new Promise((res, rej) => {
    const data = {}
    const err = "Smth going wrong"
    if (data) {
        res(data)
    } else {
        rej(err)
    }
})


const server2 = {
    getData(url) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res("Some data");
                rej("Something went wrong")
            }, 2000)
        })
    }
}

// const promise2 = server2.getData()

// promise2.catch((err) => {
//     console.log(err)
// })
//
// promise2.finally(() => {
//     console.log("finally")
// })

// promise2.then(
//     (data) => {
//         console.log(data)
//     }, (err) => {
//         console.log(err)
//     }
// )

// const promise3 = promise2.then((data) => {
//     console.log(data)
// })

server2.getData()
    .then((data) => {
        console.log('then1')
    })
    .catch((err) => {
        console.log('catch')
        return 10
    })
    .then((data) => {
        console.log(data)
    })


// server2.getData()
//     .then((data) => {
//         console.log(data)
//         return new Promise((res, rej) => {
//             // res("other promise")
//             rej('sdd')
//         })
//     })
//     .catch((err) => {
//         console.log('catch')
//     })
//     .then((data) => {
//         console.log(data)
//     })


// server2.getData()
//     .then((data) => {
//         setData(data)
//     })
//     .catch((err) => {
//         alert("")
//     })


const server3 = {
    getData(url) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Some data");
                // rej("Something went wrong")
            }, 2000)
        })
    }
}


server3.getData()
    .then((data) => {
        console.log('then1')
    })
    .then((data) => {
        console.log('then2')
        // throw new Error();
        return 10
    })
    .finally((data) => {
        console.log('finally')
        console.log(data)
    })

    .then((data) => {
        console.log('then3')
        console.log(data)
    })
    .catch((err) => {
        console.log('catch1')
        return 10
    })
    .then((data) => {
        console.log('then4')
    })
    .catch((err) => {
        console.log('catch2')

    })
    .catch((err) => {
        console.log('catch3')

    })
    .finally(() => {
        console.log('finally')
    })


Promise.reject("reject1")
    .catch((t) => t + "catch1")
    .catch((t) => t + "catch2")
    .then((t) => t + "then1")
    .finally((t) => t + "finally")
    .then((t) => console.log(t))

//reject1 + catch1 + then1