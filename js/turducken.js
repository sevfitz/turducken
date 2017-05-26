'use strict';

var userData = getFromLocalStorage();
var activeUser = new User(userData.fName, userData.lName, userData.uName, userData.uPass, userData.img);

userData.posts.forEach(function (whatever) {
    var postData = new Post(whatever.content, whatever.socMedia, whatever.time);
    activeUser.posts.push(postData);
});

activeUser.render();


// On Dashboard
// Create a new Post from the dashboard

var turPostEl = document.getElementById('turTextArea');
var smSelectEl = document.getElementById('sm-select');
var turbuttonEl = document.getElementById('turbutton');

if (turbuttonEl) {
    turbuttonEl.addEventListener('click', function () {
        event.preventDefault();
        var socMed = smSelectEl.value;
        var postText = turPostEl.value;

        activeUser.newPost(postText, socMed);
        activeUser.render();
    });
}


// Create a tweet from fake-social-media.html

var tweetEl = document.getElementById('twitextArea');
var twitterBut = document.getElementById('twitterBut');

if (twitterBut) {
    twitterBut.addEventListener('click', function () {
        event.preventDefault();
        var tweet = tweetEl.value;
        activeUser.newPost(tweet, 'twitter');
        activeUser.render();
    });
}

$('#impaired').on('click', function(){
    $('#form-wrapper').toggle();
    $('#form-wrapper').delay(15000).fadeIn(300);
})

