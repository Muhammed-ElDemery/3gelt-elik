let onOff = document.querySelector(".turn")
let audio = document.querySelector(".audio")

onOff.onclick = function () {
    onOff.classList.toggle("off")
    if(onOff.classList.contains("off")) {
        audio.pause();
    }else {
        audio.play();
    }
}