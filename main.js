const iconI = document.getElementById("iconi")
const iconIi = document.getElementById("iconii")
const iconIii = document.getElementById("iconiii")
const iconIv = document.getElementById("iconiv")
const click = document.querySelectorAll(".click")

iconI.addEventListener("click", ()=>{
    document.title = "Icon 1 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconI.classList.add("active")
})

iconIi.addEventListener("click", ()=>{
    document.title = "Icon 2 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIi.classList.add("active")
})

iconIii.addEventListener("click", ()=>{
    document.title = "Icon 3 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIii.classList.add("active")
})

iconIv.addEventListener("click", ()=>{
    document.title = "Icon 4 | Js Change Icon 🚀"
    click.forEach((el)=>{
        el.classList.remove("active")
    })
    iconIv.classList.add("active")
})

window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
})