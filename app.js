const previ = document.querySelector(".previota");
const nexti = document.querySelector(".nextiota");
const slideri = document.querySelector(".slider-wrapper");
const innerSlideri = document.querySelector(".slider-inner");

let dragged = false;
let startX;
let x;


slideri.addEventListener("mouseenter", () => {
	slideri.style.cursor = "grab";
});


slideri.addEventListener("mousemove", (e) => {
	if (!dragged) return;
	e.preventDefault();

	x = e.offsetX;

	innerSlideri.style.left = `${x - startX}px`;

	checkProbs();
});
slideri.addEventListener("mouseup", () => {
	slideri.style.cursor = "grab";
	dragged = false;
});
slideri.addEventListener("mousedown", (e) => {
	dragged = true;
	startX = e.offsetX - innerSlider.offsetLeft;
	slideri.style.cursor = "grabbing";
});









slideri.addEventListener(
	"touchstart",
	(e) => {
		dragged = true;
		startX = e.targetTouches[0].clientX - innerSlideri.offsetLeft;

		checkProbs();
	},
	{ passive: true }
);

slideri.addEventListener(
	"touchmove",
	(e) => {
		if (!dragged) return;
		x = e.targetTouches[0].clientX;

		innerSlideri.style.left = `${x - startX}px`;

		checkProbs();
	},
	{ passive: true }
);

previ.addEventListener("click", () => {
	let innerSliderLeft = innerSlideri.style.left;
	innerSlideri.style.left =
		parseInt(innerSliderLeft.replace("px", "")) + 265 + "px";

	checkProbs();
});

nexti.addEventListener("click", () => {
	let innerSliderLeft = innerSlideri.style.left;
	innerSlideri.style.left = innerSliderLeft.replace("px", "") - 265 + "px";

	checkProbs();
});

const checkProbs = () => {
	let outer = slideri.getBoundingClientRect();
	let inner = innerSlideri.getBoundingClientRect();

	if (parseInt(innerSlideri.style.left) > 0) innerSlideri.style.left = "-10px";

	if (inner.right < outer.right)
		innerSlideri.style.left = `-${inner.width - outer.width - 10}px`;
};








