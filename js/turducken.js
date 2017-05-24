"use strict";

function User( fName, lName) {
    this.fName = fName;
    this.lName = lName;
    //this.uName = uName;
    //this.img = img; //need to add images and urls...
    this.posts = [];
}

function Post( content, author, socMedia ){
    this.content = content;
    //this.author = author;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
    console.log ( this.time );
}

function init(){
    // document.getElementById("uName").addEventListener("input", populate);
    populate();
}

window.addEventListener("load", init);