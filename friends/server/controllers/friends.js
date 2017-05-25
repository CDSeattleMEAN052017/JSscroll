var mongoose = require('mongoose');
var Friend = mongoose.model('friends');

module.exports = {
    index: function(req, res){
        Friend.find({}, function(err, friends){
            if(err){
                console.log(err)
            }
            else{
                //console.log(friends)
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
        console.log(req.body)
        Friend.findOne({_id: req.params.id}, function(err, thisfriend){
            thisfriend.firstname = req.body.firstname
            thisfriend.lastname = req.body.lastname
            thisfriend.birthday = req.body.birthday
            thisfriend.save(function(err){
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
        })
    },

    delete: function(req, res){
       
        console.log("in delete function controller")
        Friend.remove({_id: req.params.id}, function(err){
           
        });

    },

    show: function(req,res){
        console.log("*******show controller*********")
        console.log(req.params._id)
        console.log("*******show controller*********")
        console.log(req.params.id)
        Friend.findOne({_id: req.params.id}, function(err, friend) {
        console.log(friend);
        res.json(friend);
        });
    }
}
