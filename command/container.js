'use strict'

const exec = require('child_process').exec;
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const router = require('./router.js');
const file = require('./file.js');

module.exports = () => {
	co(function *() {
		let containerName = (yield prompt('Container name: (home-page)')) || "home-page";
		let addRouter = (yield prompt('Add router? : (y or n)')) || "y";
		let useRender = (yield prompt('Use render decorator? : (y or n)')) || "y";
		let useConnect = (yield prompt('Use connect decorator? : (y or n)')) || "y";
		let template = "container";
		let pathUrl = `./src/containers/`;

		if (addRouter === "y") {
			yield function(done){ router(containerName, () => {
					console.log(chalk.green('\n add router success'));
					done();
				});
			};
		}

		if (useRender) {
			template += "-render";
		}

		if (useConnect) {
			template += "-connect";
		}

		template += ".tsx";

		file(template, pathUrl, containerName, () => {
			console.log(chalk.green('\n this container is build'));
			process.exit();
		})

	});
}