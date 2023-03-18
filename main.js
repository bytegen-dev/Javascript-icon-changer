const iconI = document.getElementById("iconi")
const iconIi = document.getElementById("iconii")
const iconIii = document.getElementById("iconiii")
const iconIv = document.getElementById("iconiv")
const click = document.querySelectorAll(".click")

const favicon = document.getElementById("favicon")
const img = document.getElementById("number")
const body = document.querySelector("body")
var timeout
var timeoutx
// const favicon = document.querySelector("link[rel='icon']")

iconI.addEventListener("click", ()=>{
    document.title = "Icon 1 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconI.classList.add("active")
    favicon.setAttribute("href", "./number-1.png")
    body.classList.add("anim")
    clearTimeout(timeout)
    clearTimeout(timeoutx)
    timeout = setTimeout(()=>{
        body.classList.remove("anim")
    }, 500)
    timeoutx = setTimeout(()=>{
        img.setAttribute("src", "./number-1.png")
    }, 250)
})

iconIi.addEventListener("click", ()=>{
    document.title = "Icon 2 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIi.classList.add("active")
    favicon.setAttribute("href", "./number-2.png")
    body.classList.add("anim")
    clearTimeout(timeout)
    clearTimeout(timeoutx)
    timeout = setTimeout(()=>{
        body.classList.remove("anim")
    }, 500)
    timeoutx = setTimeout(()=>{
        img.setAttribute("src", "./number-2.png")
    }, 250)
})

iconIii.addEventListener("click", ()=>{
    document.title = "Icon 3 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIii.classList.add("active")
    favicon.setAttribute("href", "./number-3.png")
    body.classList.add("anim")
    clearTimeout(timeout)
    clearTimeout(timeoutx)
    timeout = setTimeout(()=>{
        body.classList.remove("anim")
    }, 500)
    timeoutx = setTimeout(()=>{
        img.setAttribute("src", "./number-3.png")
    }, 250)
})

iconIv.addEventListener("click", ()=>{
    document.title = "Icon 4 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIv.classList.add("active")
    favicon.setAttribute("href", "./number-4.png")
    body.classList.add("anim")
    clearTimeout(timeout)
    clearTimeout(timeoutx)
    timeout = setTimeout(()=>{
        body.classList.remove("anim")
    }, 500)
    timeoutx = setTimeout(()=>{
        img.setAttribute("src", "./number-4.png")
    }, 250)
})

window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
})

const cursor = document.querySelector(".cursor")
window.addEventListener("mousemove", (e)=>{
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
})