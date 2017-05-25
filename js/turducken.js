'use strict';

function pushToLocalStorage( user ) {
    var userString = JSON.stringify( user );
    localStorage.setItem('user', userString);
    // console.log('pushed ' + userString);
}

function getFromLocalStorage( ) {
    var userString = localStorage.getItem('user');
    var user = JSON.parse(userString);
    return user;
}

// Create a new Post from the dashboard

var turPostEl = document.getElementById('turTextArea');
var smSelectEl = document.getElementById('sm-select');
var turbuttonEl = document.getElementById('turbutton');

if (turbuttonEl) {
    turbuttonEl.addEventListener('click', function(){
        event.preventDefault();
        var socMed = smSelectEl.value;
        var postText = turPostEl.value;

        bensonwigglepuff.newPost(postText, socMed);
    });
}


// Create a tweet from fake-social-media.html

var tweetEl = document.getElementById('twitextArea');
var twitterBut = document.getElementById('twitterBut');

if (twitterBut) {
    twitterBut.addEventListener('click', function(){
        event.preventDefault();
        var tweet = tweetEl.value;
        bensonwigglepuff.newPost(tweet, 'twitter');
    });
}

