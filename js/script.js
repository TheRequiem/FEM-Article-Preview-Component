const button = document.getElementById("button");
const bubble = document.getElementById("bubble");
const container = document.getElementById("container");
const share = document.getElementById("share");

const pop = ()=> {
    bubble.classList.remove("default");
    bubble.classList.add("clicked");
    container.style.marginBottom = "0.3rem";
    share.style.color = "white";
    share.style.backgroundColor = "var(--clr-dark-blue)";
}

const close = ()=> {
    bubble.classList.add("default");
    bubble.classList.remove("clicked");
    container.style.marginBottom = "1.5rem";
    share.style.color = "var(--clr-dark-blue)";
    share.style.backgroundColor = "var(--clr-light-gray-blue)";
}

document.addEventListener("click", (event)=> {
    if (event.target.closest("#share") || event.target.closest(".bubble")) {
        pop();  
    } else {
        close();
    }
})