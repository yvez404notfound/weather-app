const startLoading = function (elementClassname) {
	const element = document.querySelector(elementClassname);
	element.classList.add("skeleton-loader");
};

const endLoading = function (elementClassname) {
	const element = document.querySelector(elementClassname);
	element.classList.remove("skeleton-loader");
};

export { endLoading, startLoading };
