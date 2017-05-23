'use strict';

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
