var friends = {
  friendSort: function(newUserScores) {
    var highScore = 999;
    var bestFriend = 0;
    console.log(newUserScores);
    for (var i = 0; i < this.friendsArr.length; i++) {
      var totalFriendship = 0;
      for (var j = 0; j < 10; j++) {
        totalFriendship += (Math.abs(newUserScores[j] - this.friendsArr[i].scores[j]));

      }
      if (totalFriendship < highScore) {
        highScore = totalFriendship;
        bestFriend = i;
      }
      console.log("Highest friendship score:", highScore);
      console.log("Current Best Friend", bestFriend);
      console.log(" ");
    }
    return bestFriend;
  },
  friendsArr: [{
      "name": "Ahmed",
      "photo": "https://pbs.twimg.com/profile_images/779129231028682752/ijbnCAIa.jpg",
      "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    },
    {
      "name": "Dummy Data",
      "photo": "http://siliconvalleyrealtyworld.com/files/2011/09/Crash_Test_Dummy.jpg",
      "scores": [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
    },
    {
      "name": "Happy McGee",
      "photo": "https://i.redd.it/s2fbb6ya41uy.jpg",
      "scores": [
        3,
        4,
        3,
        2,
        5,
        5,
        4,
        4,
        5,
        5
      ]
    },
    {
      "name": "Sadface Angryman",
      "photo": "http://vignette3.wikia.nocookie.net/zelda/images/a/a3/Angry_Mask_Salesman_%28Ocarina_of_Time%29.png/revision/latest?cb=20091218032629",
      "scores": [
        1,
        2,
        2,
        1,
        3,
        2,
        2,
        3,
        4,
        1
      ]
    }
  ]
}

module.exports = friends;