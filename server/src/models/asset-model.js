const mongoose = require('mongoose')

module.exports = mongoose.model('Asset', new mongoose.Schema({
	// asset image b64 data
	source: String,
	// name of asset in editor
	name: String,
	// type of asset [platform, item, entity]
	type: String,
	// width of asset image in pixels
	width: Number,
	// height of asset image in pixels
	height: Number,
	// date/time of creation
	created: { type: Date, default: Date.now },
	// date/time of last update
	updated: { type: Date, default: Date.now }
}))
