// Pull in required dependencies
var path = require("path");

// Import the list of friend entries
var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {
  // Total list of friend entries
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Add new friend entry
  app.post("/api/friends", function(req, res) {
    var userInput = req.body; //req is the object and body is the key
    var newScoreArr = userInput.scores;
    console.log(newScoreArr);
    var totalUserScore = 0;
    newScoreArr.forEach(score => {
      totalUserScore = totalUserScore + parseInt(score);
    });
    console.log(totalUserScore);

    var minScoreDifference = 99999999; //this will keep updating because of line 37
    var friendSoFar = null;
    friends.forEach(friend => {
      // this will be the first array from friends where friend is iterator for the whole friends object
      var friendScoreArr = friend.scores; // gives the array only for scores from friend object
      var totalFriendScore = 0; // initializing totalfriendscore is 0 at the begining
      friendScoreArr.forEach(score => {
        // this will be the second array from friendscorearr where score is the iterator
        totalFriendScore = totalFriendScore + parseInt(score); // adding totalfriendscore and score to get the total friendscore
      });
      console.log(friend.userName + " : " + totalFriendScore);
      var scoreDifference = totalUserScore - totalFriendScore; // substracting totaluserscore-totalfriendscore to get the differences
      scoreDifferenceSquare = Math.pow(scoreDifference, 2); //using power rule to multiply the totaldifference so that the -ve number can be changed to positive
      console.log(friend.userName + " : " + scoreDifferenceSquare);
      if (scoreDifferenceSquare < minScoreDifference) {
        // now the minscore is 999999 which is greater than scoreDifferenceSquare so the minimum is scoredifferencesuqare
        minScoreDifference = scoreDifferenceSquare; //this will update the vaule of minScoreDifference to the value of scoreDifferenceSquare
        friendSoFar = friend; // this will update the friendsofar who has the minimumscore to be your best match
      }
    });
    console.log(friendSoFar);
    console.log("Min :" + minScoreDifference);

    res.json(true);
  });

  app.post("/api/clear", function(req, res) {});
};
