let btnShow = document.querySelector(".button-popup");
let btnClose = document.querySelector(".button-close")
let popup = document.querySelector(".popup");
let popupName = document.querySelector(".appointment-name");
let popupEmail = document.querySelector(".appointment-email");
let popupText = document.querySelector(".appointment-text")
let popupForm = document.querySelector(".appointment-form");

let isStorageSupport = true;
let storage = "";
let storage2 = "";

try {
	storage = localStorage.getItem("Name");
	storage2 = localStorage.getItem("Email");
} catch(err) {
	isStorageSupport = false;
}

btnShow.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
	
	if (storage && storage2) {
		popupName.value = storage;
		popupEmail.value = storage2;
		popupText.focus();
	} else {
		popupName.focus();
	}
});

btnClose.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("popup-show");
	popup.classList.remove("popup-eror");
});

popupForm.addEventListener("submit", function(evt){
	if (!popupName.value || !popupEmail.value || !popupText.value) {
		evt.preventDefault();
		popup.classList.add("popup-eror");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("popup-eror");
	} else {
		localStorage.setItem("Name", popupName.value);
		localStorage.setItem("Email", popupEmail.value);
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode == 27) {
		if (popup.classList.contains("popup-show")) {
			evt.preventDefault();
			popup.classList.remove("popup-show");
			popup.classList.remove("popup-eror");
		}
	}
});