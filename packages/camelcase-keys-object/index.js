const toCamelCase = require('js-camelcase');

function camelKeys(obj) {

	if (!obj) return null;

	const res = {};
	for (let key in obj) {
		res[toCamelCase(key)] = obj[key];
	}

	return res;
}

module.exports = camelKeys;
