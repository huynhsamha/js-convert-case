const toSnakeCase = require('js-snakecase');

function snakeKeys(obj) {

	if (!obj) return null;

	const res = {};
	for (let key in obj) {
		res[toSnakeCase(key)] = obj[key];
	}

	return res;
}

module.exports = snakeKeys;
