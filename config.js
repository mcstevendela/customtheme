module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js"
	},
	paths: {
		root: "./",
		src: {
			base: "./",
			css: "./scss",
			js: "./js",
			img: "./images",
			includes: "./includes",
			fonts: "./fonts",
			templates: "./templates"
		},
		dist: {
			base: "./",
			css: "./css",
			js: "./js",
			img: "./images",
			includes: "./includes",
			fonts: "./fonts",
			templates: "./templates"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/images",
			includes: "./build/includes",
			fonts: "./build/fonts",
			templates: "./build/templates"
		}
	}
}