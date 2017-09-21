var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends.friendsArr)
  });
  app.post("/api/friends", function(req, res) {
    for (var i = 0; i < req.body.scores.length; i++) {
      req.body.scores[i] = parseInt(req.body.scores[i]);
    }
    var newUser = req.body;
    res.json(friends.friendsArr[friends.friendSort(newUser.scores)]);
    friends.friendsArr.push(newUser);
  });
}