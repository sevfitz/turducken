'use strict';

// User.prototype.newTweet = function (tweet) {
//     if (tweet) {
//         var tweet = JSON.parse(localStorage.getItem('tweet'));
//         this.posts.push(new Post(tweet, 'Twitter'));
//     }
// };

var tweetEl = document.getElementById('textArea');

var twitterBut = document.getElementById('twitterBut');
twitterBut.addEventListener('click', function(){
    saveToStorage(tweetEl.value);
});

function saveToStorage(post) {
    localStorage.setItem('tweet', JSON.stringify(post));
}


var tweet = JSON.parse(localStorage.getItem('tweet'));
this.posts.push(new Post(tweet, 'Twitter'));