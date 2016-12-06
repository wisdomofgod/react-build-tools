'use strict'

const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');

module.exports = () => {
	co(function  *() {
		let projectName = (yield prompt('Project name: (react-project)')) || "react-project";
		let gitUrl = "https://github.com/wisdomofgod/react-decorator-template";

		let shellStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout master && npm install`;
		exec(shellStr, (error, stdout, stderr) => {
			if (error) {
				console.log(error);
				process.exit();
			}

			console.log(chalk.green('\n this project is build'));

			process.exit();
		})
	});
}