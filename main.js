const iconI = document.getElementById("iconi")
const iconIi = document.getElementById("iconii")
const iconIii = document.getElementById("iconiii")
const iconIv = document.getElementById("iconiv")
const click = document.querySelectorAll(".click")

const favicon = document.getElementById("favicon")
const img = document.getElementById("number")
// const favicon = document.querySelector("link[rel='icon']")

iconI.addEventListener("click", ()=>{
    document.title = "Icon 1 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconI.classList.add("active")
    favicon.setAttribute("href", "./number-1.png")
    img.setAttribute("src", "./number-1.png")
})

iconIi.addEventListener("click", ()=>{
    document.title = "Icon 2 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIi.classList.add("active")
    favicon.setAttribute("href", "./number-2.png")
    img.setAttribute("src", "./number-2.png")
})

iconIii.addEventListener("click", ()=>{
    document.title = "Icon 3 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIii.classList.add("active")
    favicon.setAttribute("href", "./number-3.png")
    img.setAttribute("src", "./number-3.png")
})

iconIv.addEventListener("click", ()=>{
    document.title = "Icon 4 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIv.classList.add("active")
    favicon.setAttribute("href", "./number-4.png")
    img.setAttribute("src", "./number-4.png")
})

window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
})