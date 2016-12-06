'use strict'

const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const file = require('./file.js');

module.exports = () => {
	co(function *() {
		let containerName = (yield prompt('Component name: (button)')) || "button";
		let useRender = (yield prompt('Use render decorator? : (y or n)')) || "y";
		let useConnect = (yield prompt('Use connect decorator? : (y or n)')) || "y";
		
		let template = "component";
		let pathUrl = `./src/components/${containerName}/`;

		if (useRender) {
			template += "-render";
		}

		if (useConnect) {
			template += "-connect";
		}

		template += ".tsx";
		
		file(template, pathUrl, 'index', () => {
			console.log(chalk.green('\n this component is build'));
			process.exit();
		})

	});
}