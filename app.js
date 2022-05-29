const submit_btn = document.querySelector(".btn_submit");
const rating_div = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const rating_btn = document.querySelectorAll(".btt");
const rating = document.querySelector(".rating-point");
let start_rating = 0;

submit_btn.addEventListener("click", toggleClass);
rating_btn.forEach((btn) => {
	btn.addEventListener("click", togglePoint);
});

function toggleClass() {
	rating_div.classList.add("hide");
	rating.textContent = start_rating;
	thanks.classList.remove("hide");
}

function togglePoint({ target }) {
	rating_btn.forEach((btn) => {
		btn.classList.remove("active");
	});
	target.classList.add("active");
	start_rating = target.textContent;
}
