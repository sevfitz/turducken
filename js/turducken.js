'use strict';

// var whatever = document.getElementById("login-form");
// whatever.addEventListener("submit", init());

// var anotherone = document.getElementById(" ")

// var bensonwigglepuff = new User('Benson', 'WigglePuff');

// Start of Fake Twitter Section

var tweetEl = document.getElementById('textArea');

var twitterBut = document.getElementById('twitterBut');
if (twitterBut) {
    twitterBut.addEventListener('click', function(){
        saveToStorage(tweetEl.value);
    });
}

function saveToStorage(post) {
    localStorage.setItem('tweet', JSON.stringify(post));
}


var tweet = JSON.parse(localStorage.getItem('tweet'));
console.log(bensonwigglepuff + ' is here');
bensonwigglepuff.posts.push(new Post(tweet, 'Twitter'));

// End of Fake Twitter Section