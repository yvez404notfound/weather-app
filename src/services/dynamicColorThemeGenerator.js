class DynamicColorThemeGenerator {
	bodyElement;

	constructor(bodyElement) {
		this.bodyElement = bodyElement;
	}

	changeTheme(currentCondition) {}

	initDefaultTheme() {
		this.bodyElement.classList.add("clear-day");
		this.bodyElement.style.backgroundImage = `radial-gradient(circle at 100% 0%, rgb(var(--primary)), rgb(var(--primary-container)))`;
	}

	generateRandomRadialGradient() {}
}

export default DynamicColorThemeGenerator;
