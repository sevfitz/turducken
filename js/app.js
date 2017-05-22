"use strict";

//init
var posts = [];
var postNumCounter;
populate(); //in mockData.js

function User( fName, lName, uName, img ) {
    this.fName = fName;
    this.lName = lName;
    this.uName = uName;
    this.img = img;
    this.posts = [];
}

function Post( content, author, socMedia ){
    this.content = content;
    this.author = author;
    this.socMedia = socMedia;
    this.getTime = getTime();
}

Post.prototype.getPostId = function( ) {

}

function postHandler ( ) {

    var num = posts.length;
    var post = new Post( content, author, socMedia );
    posts.push( newPost );
}
