const buildItem = document.querySelectorAll(".build-item");
const optionFlats = document.querySelector("#option-flats");
const optionFloors = document.querySelector("#option-floors");
const optionAdress = document.querySelector("#option-adress");
const informationDescription = document.querySelector(
	"#information-description"
);

console.log(buildItem);

buildItem.forEach((item) => {
	if (item.classList.contains("sold")) {
		item.closest("a").classList.add("disallow-following");
	} else {
		item.addEventListener("mouseover", buildInfo);
	}

	function buildInfo() {
		const itemAdress = item.getAttribute("data-adress");
		const itemFloorst = item.getAttribute("data-floors");
		const itemFlats = item.getAttribute("data-flats");
		const itemDescription = item.getAttribute("data-descriptions");

		optionAdress.innerHTML = itemAdress;
		optionFloors.innerHTML = itemFloorst;
		optionFlats.innerHTML = itemFlats;
		informationDescription.innerHTML = itemDescription;
	}
});

const wrapperBuildItem = document.querySelectorAll(".disallow-following");

wrapperBuildItem.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
	});
});
