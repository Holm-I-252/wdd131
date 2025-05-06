let light_dark = document.getElementById("light_dark")
let pic = document.getElementById("logo")

function lightDark() {
    if (light_dark.value == "dark") {
        document.body.classList.add("dark")
        pic.setAttribute("src", "byui-logo_white.png")
    } else {
        document.body.classList.remove("dark")
        pic.setAttribute("src", "byui-logo_blue.webp")
    }
}

light_dark.addEventListener("change", lightDark)