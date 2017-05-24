var mongoose = require('mongoose');
var Friend = mongoose.model('friends');

module.exports = {
    index: function(req, res){
        Friend.find({}, function(err, friends){
            if(err){
                console.log(err)
            }
            else{
                console.log(friends)
                res.json(friends)
            }
        })
    },

    create: function(req, res){
        var friend = new Friend({firstname: req.body.firstname, lastname: req.body.lastname, birthday: req.body.birthday});
        friend.save(function(err){
            if(err){
                console.log('creating friend error!')
                console.log(err)
                return res.json(err)
            }
            else{
                console.log('friend created')
                return res.json(friend);
            }
        })
    },

    update: function(req, res){
        Friend.update({id: req.params.id}, {$set: {firstname: req.body.firstname , lastname: req.body.lastname, birthday: req.body.birthday}}, function(err){
            if(err){
                console.log("friend not updated");
                console.log(err);
                return res.json(err)
            }
            else{
                console.log('updated friend')
                return res.json(Friend)
            }
        })
    },


    


}
    