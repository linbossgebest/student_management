var mongoose = require('mongoose')

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })

var studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number,
    },
    hobbies: {
        type: String
    }
}, { versionKey: false })

module.exports = mongoose.model('Student', studentSchema)

