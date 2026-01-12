import "./assets/styles/modern-normalize.css";
import "./index.css";

/* Color Schemes */
import "./assets/styles/clear-dark.css";
import "./assets/styles/clear-day.css";
/* ============= */

import "./api/giphyApi.js";
import "./api/weatherApi.js";

import DynamicColorThemeGenerator from "./services/dynamicColorThemeGenerator.js";

const bodyElement = document.querySelector("body");

const dynamicColorThemeGenerator = new DynamicColorThemeGenerator(bodyElement);
dynamicColorThemeGenerator.initDefaultTheme();

console.log("Template is working");
