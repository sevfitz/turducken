"use strict";

function User( fName, lName) {
    this.fName = fName;
    this.lName = lName;
    //this.img = img; //need to add images and urls...
    this.posts = [];
}

User.prototype.newPost = function( content, socMedia ) {
    this.posts.push( new Post( content, socMedia ));
}


User.prototype.render = function() {
    console.table( this.posts );
}

function Post( content, socMedia ){
    this.content = content;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
}

function pushToLocalStorage( user ) {
    var userString = JSON.stringify( user );
    localStorage.setItem('user', userString);
    console.log("pushed " + userString);
}

function getFromLocalStorage( ) {
    var userString = localStorage.getItem('user');

    var user = JSON.parse(userString);

    if ( user ){
        console.log( user.posts);
    };
}


function init(){
    populate();
    bensonwigglepuff.render();
    pushToLocalStorage( bensonwigglepuff );
    getFromLocalStorage( bensonwigglepuff );
}

window.addEventListener("load", init);
