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

User.prototype.saveLogin = function() {
    // save the uName and uPass in localStorage
    localStorage.setItem( 'uName', JSON.stringify(this.uName));
    localStorage.setItem( 'uPass', JSON.stringify(this.uPass));
};

var checkLogin = function() {
    // check if the uName and uPass are in local storage and clear form inputs if they are not
    var saveduName = JSON.parse(localStorage.getItem('uName'));
    var saveduPass = JSON.parse(localStorage.getItem('uPass'));
    var loginFormEl = document.getElementById('login-form');

    if ( !saveduName || !saveduPass ) {
        alert('Please enter a valid username or password.');
        uNameEl.value = '';
        uPassEl.value = '';
    
    } else if ( uNameEl.value !== saveduName && uPassEl.value !== saveduPass ) {
        alert( 'That username and password don\'t match.' );
        uNameEl = '';
        uPassEl = '';
        
    } else {
        loginFormEl.action = 'index.html';
    }
};

var testUser = new User('First','Last','testuName','testuPass','../img/cartoon-hedgehog.jpg');

function noSpace( loginInput ) {
    if ( loginInput.value ) {
        if ( loginInput.value.match(/\s/g) ){
            alert( 'Spaces are not allowed in usernames or passwords.' );
            loginInput.value = loginInput.value.replace( /\s/g, '' );
        }
    }
}

var uNameEl = document.getElementById( 'uName' );
var uPassEl = document.getElementById( 'uPass' );
var buttonEl = document.getElementById( 'login-button' );

uNameEl.addEventListener( 'blur', function () {
    noSpace( uNameEl );
});
uPassEl.addEventListener( 'blur', function () {
    noSpace( uPassEl );
});
buttonEl.addEventListener( 'click', function () {
    checkLogin();
});
buttonEl.addEventListener( 'enter', function () {
    checkLogin();
});
