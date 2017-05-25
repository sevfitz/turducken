'use strict';

// TODO: figure out the max of 14 post objects in the posts array
// TODO: check on the order--something weird going on.

function saveToStorage(assocSM, post) {
    localStorage.setItem(assocSM, JSON.stringify(post));
}

// Create a new Post from the dashboard

var turPostEl = document.getElementById('turTextArea');
var smSelectEl = document.getElementById('sm-select');
var turbuttonEl = document.getElementById('turbutton');

if (turbuttonEl) {
    turbuttonEl.addEventListener('click', function(){
        saveToStorage(smSelectEl.value,turPostEl.value);
    });
}

if (smSelectEl) {
    var socMed = smSelectEl.value;
    var postText = JSON.parse(localStorage.getItem(smSelectEl.value));
}

bensonwigglepuff.posts.push(new Post(postText, socMed));

// Create a tweet from fake-social-media.html

var tweetEl = document.getElementById('twitextArea');
var twitterBut = document.getElementById('twitterBut');

if (twitterBut) {
    twitterBut.addEventListener('click', function(){
        saveToStorage('twitter', tweetEl.value);
    });
}

var tweet = JSON.parse(localStorage.getItem('twitter'));
console.log(bensonwigglepuff,'is here');
bensonwigglepuff.posts.push(new Post(tweet, 'twitter'));
