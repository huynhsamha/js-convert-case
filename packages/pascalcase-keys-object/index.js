const toPascalCase = require('js-pascalcase');

function pascalKeys(obj) {

	if (!obj) return null;

	const res = {};
	for (let key in obj) {
		res[toPascalCase(key)] = obj[key];
	}

	return res;
}

module.exports = pascalKeys;
