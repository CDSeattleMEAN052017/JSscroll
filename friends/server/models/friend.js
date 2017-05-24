var mongoose = require ('mongoose');

var FriendSchema = new mongoose.Schema({
    firstname: {type: String, require: true, minlength: 2},
    lastname: {type: String, require: true, minlength: 2},
    birthday: {type: Date, require: true}, 
    editable: {type: Boolean, require: true}
}, {timestamps: true});


mongoose.model('friends', FriendSchema)
let Friend = mongoose.model('friends')