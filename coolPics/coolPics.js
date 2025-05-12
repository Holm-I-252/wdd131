let nav = document.querySelector("#nav");
let nav_options = document.querySelectorAll(".nav_option");
let menu = document.querySelector("#menu");

function hideShow() {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
        nav_options.forEach(option => {
            option.style.display = "flex";
        });
    } else {
        nav.style.display = "none";
        nav_options.forEach(option => {
            option.style.display = "none";
        });
    }
}

menu.addEventListener("click", hideShow);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

window.addEventListener("resize", handleResize);
handleResize(); 

function viewerTemplate(pic, alt) {
   return  `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" id="viewer-img">
      </div>`
}

function viewHandler(e){
    let pic = e.target;
    let split_src = pic.src.split("-");
    split_src[1] = "full.jpeg";
    let full_src = split_src.join("-");
    console.log(full_src);
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(full_src, pic.alt));
    document.querySelector(".close-viewer").addEventListener("click", () => {
        document.querySelector(".viewer").remove();
    });
}

document.querySelectorAll("figure img").forEach(pic => {
    pic.addEventListener("click", viewHandler);
});