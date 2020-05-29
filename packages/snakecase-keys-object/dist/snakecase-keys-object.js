'use strict';

function toSnakeCase(str) {

	if (!str) return '';

	return String(str)
		.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
		.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '_' + b.toLowerCase())
		.replace(/[^A-Za-z0-9]+|_+/g, '_')
		.toLowerCase();

}

function snakeKeys(obj) {

	if (!obj) return null;

	const res = {};
	for (let key in obj) {
		res[toSnakeCase(key)] = obj[key];
	}

	return res;
}
