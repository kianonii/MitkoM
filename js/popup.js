const body = document.getElementById("body");
const popup = document.getElementById("popup");
const popupOpen = document.getElementById("popup_open");
const popupClose = document.getElementById("popup_close");

popupOpen.addEventListener("click", function () {
    popup.classList.add("active");
    body.classList.add("lock");
});

popupClose.addEventListener("click", function () {
    popup.classList.remove("active");
    body.classList.remove("lock");
});

