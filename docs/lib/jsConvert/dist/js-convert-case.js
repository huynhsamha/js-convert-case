"use strict";

let jsConvert = {};

(function () {
	function toCamelCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/[^A-Za-z0-9]+/g, "$")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "$" + b)
			.toLowerCase()
			.replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase());
	}

	function toSnakeCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, "_")
			.toLowerCase();
	}

	function toPascalCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "$")
			.replace(/[^A-Za-z0-9]+/g, "$")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "$" + b)
			.toLowerCase()
			.replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
	}

	function toDotCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, ".")
			.toLowerCase();
	}

	function toPathCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, "/")
			.toLowerCase();
	}

	function toTextCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, " ")
			.toLowerCase();
	}

	function toSentenceCase(str) {
		if (!str) return "";

		let textcase = String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, " ")
			.toLowerCase();

		return textcase.charAt(0).toUpperCase() + textcase.slice(1);
	}

	function toHeaderCase(str) {
		if (!str) return "";

		return String(str)
			.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
			.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
			.replace(/[^A-Za-z0-9]+|_+/g, " ")
			.toLowerCase()
			.replace(/( ?)(\w+)( ?)/g, (m, a, b, c) => {
				return a + b.charAt(0).toUpperCase() + b.slice(1) + c;
			});
	}

	const toUpperCase = str => String(str).toUpperCase();
	const toLowerCase = str => String(str).toLowerCase();

	jsConvert = {
		toCamelCase,
		toSnakeCase,
		toPascalCase,
		toDotCase,
		toPathCase,
		toPascalCase,
		toTextCase,
		toSentenceCase,
		toHeaderCase,
		toUpperCase,
		toLowerCase
	};
})();
