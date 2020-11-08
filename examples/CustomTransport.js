// This is essentially just the TerminalTransport without color.
// Realistically you can just pass `false` to the TerminalTransport constructor like:
/*
	const Loggaby = require('loggaby');
	const TerminalTransport = new Loggaby.TerminalTransport({color: false});
	const logger = new Loggaby({
		transports: [TerminalTransport]
	});

	logger.log('Hello World!');
*/

const Loggaby = require('../lib');

class CustomTransport extends Loggaby.Transport {
	constructor() {
		super({color: false}); // Disable color
	}

	// The function to post/print a message
	// NOTE: Does not to printf-style formatting like TerminalTransport, as you can see.
	transmit(args) {
		console.log(args.join(' '));
	}
}

module.exports = CustomTransport;
