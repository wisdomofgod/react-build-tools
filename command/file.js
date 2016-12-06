"use strict";

const fs = require('fs');
const path = require('path');

module.exports =  (templateUrl, pathUrl, fileName, callback) => {
	templateUrl = path.join(__dirname, '../templates/' + templateUrl);
	let fileType = templateUrl.split('.').pop();

	if (!mkdir(pathUrl)) {
		throw `mkdir error`;
	};

	pathUrl += `${fileName}.${fileType}`;

	fs.readFile(templateUrl, (err, content) => {
		fs.writeFile(pathUrl, content, (error) => {
			if (error) throw error;
			callback();
		})
	});
}

function mkdir(dirpath) {
	if (!fs.existsSync(dirpath)) {
		let pathtmp = '';
		dirpath.split(path.sep).forEach((dirname) => {
			if (pathtmp) {
				pathtmp = path.join(pathtmp, dirname);
			} else {
				pathtmp = dirname;
			}
			if (!fs.existsSync(pathtmp)) {
				if (!fs.mkdirSync(pathtmp)) {
					return false;
				}
			}
		})
	}
	return true;
}