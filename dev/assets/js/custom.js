const buildItem = document.querySelectorAll(".build-item");
const optionFlats = document.querySelector("#option-flats");
const optionFloors = document.querySelector("#option-floors");
const optionAdress = document.querySelector("#option-adress");
const optionStatus = document.querySelector("#option-status");
const informationDescription = document.querySelector(
	"#information-description"
);
console.log(buildItem);

buildItem.forEach((item) => {
	const isSold = item.classList.contains("sold");

	item.addEventListener("mouseover", buildInfo);

	isSold ? item.closest("a").classList.add("disallow-following") : null;

	function buildInfo() {
		const itemAdress = item.getAttribute("data-adress");
		const itemFloorst = item.getAttribute("data-floors");
		const itemFlats = item.getAttribute("data-flats");
		const itemDescription = item.getAttribute("data-descriptions");

		optionAdress.innerHTML = itemAdress;
		optionAdress.innerHTML = itemAdress;
		optionFloors.innerHTML = itemFloorst;
		optionFlats.innerHTML = itemFlats;
		informationDescription.innerHTML = itemDescription;
		isSold ? (optionStatus.innerHTML = "(sould out)") : null;
	}
});

const wrapperBuildItem = document.querySelectorAll(".disallow-following");

wrapperBuildItem.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
	});
});
