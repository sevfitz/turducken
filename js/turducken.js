"use strict";

function User( fName, lName) {
    this.fName = fName;
    this.lName = lName;
    //this.img = img; //need to add images and urls...
    this.posts = [];
}

 User.prototype.render = function () {
    console.table( this.posts );
//     var row = document.createElement( 'tr' );
//   //  createCell( 'td', this.posts.content, row );
//     for (var i = 0; i < times.length; i++) {
//         createCell( 'td', this.posts.content, row );
//     }
//     table.appendChild( row );
 }

// function createCell( cellType, content, row ) {
//     var cell = document.createElement( cellType );
//     cell.innerText = content;
//     row.appendChild( cell );
// }

function Post( content, author, socMedia ){
    this.content = content;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
}

function init(){
    // document.getElementById("uName").addEventListener("input", populate);
    populate();
    bensonwigglepuff.render();
}

window.addEventListener("load", init);


