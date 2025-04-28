let light_dark = document.getElementById("light_dark")

function lightDark() {
    if (light_dark.value == "dark") {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
}

light_dark.addEventListener("change", lightDark)