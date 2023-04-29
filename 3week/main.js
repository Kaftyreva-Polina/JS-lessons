// handler === listener === subscriber => function
// handler c callback
// callback => handler, setTimeout/setInterval, param of arrays method
// onclick = handler; handler({...})
// {...} -event, ev, e

const sm = document.getElementById("small");
const md = document.getElementById("medium");
const bg = document.getElementById("big");

// const handler1 = (e) => {
//     if(e.currentTarget.id === "small") {
//         alert("OK")
//     }
// }

const handler1 = (e) => {
    e.stopPropagation()
    if(e.target.tagName ==="BUTTON") {
        alert(e.target.id)
    }
    // else {
    //     alert("Это не кнопка")
    // }
}
const handler2 = (e) => {
    alert(e.currentTarget.id)
}

const handler3 = (e) => {
    alert(e.currentTarget.id)
}

// sm.onclick = handler1
// sm.onclick = handler2

// sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)
//
// sm.removeEventListener("click", handler1)
// sm.removeEventListener("click", handler2)

sm.onclick = handler1
md.onclick = handler2
bg.onclick = handler3

const handler4 = (e) => {
    e.preventDefault()
    alert("Привет")
}

const a = document.getElementById("a")
a.addEventListener("click", handler4)