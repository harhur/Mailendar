
var x = new XMLHttpRequest();
x.open("GET", "https://apis.google.com/js/platform.js");
x.send();

// used for testing
var userID = "harrisonhur@gmail.com";

// retrieves a list of messages given string userId, string query, function callback
// callback function is a function that is passed to another function

function listMessages(userId, query, callback) {
  var getPageOfMessages = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.messages);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.gmail.users.messages.list({
          'userId': userId,
          'pageToken': nextPageToken,
          'q': query
        });
        console.log(
          "hello!");
      } else {
        callback(result);
      }
    });
  };
  var initialRequest = gapi.client.gmail.users.messages.list({
    'userId': userId,
    'q': query
  });
  console.log("hello!!");
}

// Get Message with given ID.

/*function getMessage(userId, messageId, callback) {
  var request = gapi.client.gmail.users.messages.get({
    'userId': userId,
    'id': messageId
  });
  request.execute(callback);
}*/

// placeholder

function refreshPage() {
  console.log("hey");
  document.getElementById("email_list").innerHTML = "Refreshing...";
}

/*document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', refreshPage);
});*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', listMessages);
});