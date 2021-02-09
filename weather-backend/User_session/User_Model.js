const mongoose = require('mongoose')
const Model = mongoose.Schema

const UserModel = new Model({
    name: String,
    favorites: Array,
    dateJoined: {
        type: Date,
        default: Date.now()
    }
})

const UserSchema = mongoose.model('User', UserModel)

module.exports = UserSchema