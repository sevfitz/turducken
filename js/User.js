'use strict';

function User( fName, lName, uName, uPass, img ) {
    this.fName = fName;
    this.lName = lName;
    this.uName = uName;
    this.uPass = uPass;
    this.img = img;
    this.posts = []; 
    this.saveLogin();
}

User.prototype.newPost = function( content, socMedia ) {
    this.posts.push( new Post( content, socMedia ));
    pushToLocalStorage( this );
};


User.prototype.render = function() {
    console.table( this.posts );
};


User.prototype.saveLogin = function() {
    // save the uName and uPass in localStorage
    localStorage.setItem( 'uName', JSON.stringify(this.uName));
    localStorage.setItem( 'uPass', JSON.stringify(this.uPass));
};

function Post( content, socMedia ){
    this.content = content;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
}

