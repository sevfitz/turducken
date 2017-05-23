'use strict';

function User( fName, lName, uName, uPass, img ) {
    this.fName = fName;
    this.lName = lName;
    this.uName = uName;
    this.uPass = uPass;
    this.img = img;
    this.posts = [];    
}

var testUser = new User('First','Last','testuName','testuPass','../img/cartoon-hedgehog.jpg');

User.prototype.saveLogin = function() {
    // save the uName and uPass in localStorage
    localStorage.setItem( 'uName', JSON.stringify(this.uName));
    localStorage.setItem( 'uPass', JSON.stringify(this.uPass));

};

User.prototype.checkLogin = function() {
    // check if the uName and uPass are in local storage
    // retrieve uName and uPass from local storage if so
    // check if the uName and uPass match
    // login if both are true



};




function noSpace( loginInput ) {
    if ( loginInput.value.match(/\s/g) ){
        alert( 'Spaces are not allowed in usernames or passwords.' );
        loginInput.value = loginInput.value.replace( /\s/g, '' );
    }
}

var uNameEl = document.getElementById( 'uName' );
var uPassEl = document.getElementById( 'uPass' );
uNameEl.addEventListener( 'blur', function () {
    noSpace( uNameEl );
});
uPassEl.addEventListener( 'blur', function () {
    noSpace( uPassEl );
});

