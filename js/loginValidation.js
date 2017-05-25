'use strict';

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

if (uNameEl) {
    uNameEl.addEventListener( 'blur', function () {
        noSpace( uNameEl );
    });
}
if (uPassEl) {
    uPassEl.addEventListener( 'blur', function () {
        noSpace( uPassEl );
    });
}
if (buttonEl) {
    buttonEl.addEventListener( 'click', function () {
        checkLogin();
    });
}
if (buttonEl) {
    buttonEl.addEventListener( 'enter', function () {
        checkLogin();
    });
}
