$(function(){


  $("#userInput").submit(function(event) {

    var favoriteArray = [$("#animal").val(), $("#color").val(), $("#movie").val(), $("#drink").val()];

    $(".favorite-list").prepend('<li>' + favoriteArray[0] + '</li>' + '<li>' + favoriteArray[1] + '</li>' + '<li>' + favoriteArray[2] + '</li>' + '<li>' + favoriteArray[3] + '</li>');


    $('.initially-hidden').show();

    event.preventDefault();
  });

});
