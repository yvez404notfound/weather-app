const closeDialog = function (dialogElement) {
	dialogElement.close();
	document.body.style.overflow = "";
};

const openDialog = function (dialogElement) {
	dialogElement.showModal();
	document.body.style.overflow = "hidden";
};

export { closeDialog, openDialog };
