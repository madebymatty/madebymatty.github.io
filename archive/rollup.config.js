//import babel from "@rollup/plugin-babel";
//import { terser } from "rollup-plugin-terser";
//import multi from "@rollup/plugin-multi-entry";
import scss from "rollup-plugin-scss"
//import del from "rollup-plugin-delete"

export default [{
	input: "src/all.scss",
	plugins: [
		scss({
			output: "build/assets/css/styles.css",
			outputStyle: "expanded"
		})
	]
}, {
	input: "src/all.scss",
	plugins: [
		scss({
			output: "build/assets/css/styles.min.css",
			outputStyle: "compressed"
		})
	]
}
];
