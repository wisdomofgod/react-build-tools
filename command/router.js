"use strict";

const fs = require('fs');
const path = require('path');

module.exports =  (fileName, callback) => {
	let templateUrl = `./src/router.tsx`;

	fs.readFile(templateUrl, "utf8", (err, content) => {
		content = addRouter(content, fileName);
		fs.writeFile(templateUrl, content, (error) => {
			if (error) throw error;
			callback();
		})
	});
}

function addRouter(content, fileName) {
	let index = 0, space = '';
	let pathName = fileName;
	fileName = fileName.replace('-page', '');

	if (content.indexOf(`component=\{ ${fileName} \}`) > -1) {
		return content;
	}


	index = content.lastIndexOf('import');
	if (index > -1) {
		index = content.indexOf('\n', index);
	}
	content = content.substr(0, index) + `\nimport ${fileName} from "./containers/${pathName}";` + content.substr(index);

	index = -1;
	index = content.lastIndexOf('<Route');
	if (index > -1) {
		let lastN = content.lastIndexOf('\n', index);
		
		if (lastN > -1) {
				space = content.substr(lastN, (index - lastN));
		}
		index = content.indexOf('\n', index);
	}
	
	content = content.substr(0, index) + `${space}<Route path="/${fileName}" component=\{ ${fileName} \} />` + content.substr(index);
	return content;
}