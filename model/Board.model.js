const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    Email: { type: String, required: true },
    boards: { type: Array, required: true },
}, {
    versionKey: false,
})

const BoardModel = mongoose.model('board', boardSchema)

module.exports = {
    BoardModel
}