'use strict';


function init(){
    if (!getFromLocalStorage()) {
        console.log('creating user for the first time');
        var boo = createUser();
        pushToLocalStorage( boo );     
    }

}

function createUser( ) {
    // POSTS THAT WILL APPEAR IN STREAM \\
    var bensonwigglepuff = new User('Benson', 'Wigglepuff', 'boogie', 'jjboogz', '../images/bw.jpg' );
    bensonwigglepuff.posts.push( new Post('Sometimes I have an existential crisis when making a sandwich because isn’t life just a giant sandwich?','twitter', '12 Mar 2017  12:01' ));
    bensonwigglepuff.posts.push( new Post('<img src="images/puggle.jpg">', 'instagram', '13 Mar 2017  14:41' ));
    bensonwigglepuff.posts.push( new Post('I ate an entire jar of mayonnaise and I don’t feel so good.  Mom said that eating a jar of mayonnaise isn’t okay but she doesn’t get it.', 'facebook', '28 Mar 2017  16:56' ));
    bensonwigglepuff.posts.push( new Post('You guys, I just made the best breakfast ever. It was super simple, you can make it with your kids and you’ll look like a superstar. Here’s the recipe: http://www.foodnetwork.com/recipes/ree-drummond/perfect-french-fries-recipe2-2120420', 'facebook', '02 Apr 2017  09:01' ));
    bensonwigglepuff.posts.push( new Post('<img src="images/toast.png">', 'instagram', '05 Apr 2017  09:11' ));
    bensonwigglepuff.posts.push( new Post('Man, I really wish there was an app that managed all of my social media outlets in one place…', 'twitter', '14 Apr 2017  12:33' ));

    bensonwigglepuff.posts.push( new Post('<img src="images/people.jpg">', 'instagram', '25 Apr 2017  20:10' ));

    bensonwigglepuff.posts.push( new Post('This girl in my class, Stephanie, was trying to explain physics to me today and she’s hella smart. I was like “omg Steph what are you talking about, girl. You’re wild.”', 'facebook', '26 Apr 2017  10:07' ));

    bensonwigglepuff.posts.push( new Post('I just ate an entire 5lb burrito in one sitting.', 'twitter', '02 May 2017  11:59' ));

    bensonwigglepuff.posts.push( new Post('<img src="images/cat.jpg">', 'instagram', '09 May 2017  13:41' ));
    bensonwigglepuff.posts.push( new Post('Today in class we learned about local storage and it totally blew my mind. Learning how to code in general is so eye opening and I think everyone should give it a shot to see if it’s a path they might want to pursue!', 'facebook', '12 May 2017  17:21' ));
    bensonwigglepuff.posts.push( new Post('Tfw Code Fellows PDX is the best place ever.',  'twitter', '20 May 2017  10:29' ));
    return bensonwigglepuff;
}



init();

var checkLogin = function() {
    // check if the uName and uPass are in local storage and clear form inputs if they are not
    var user = getFromLocalStorage();
    var saveduName = user.uName;
    var saveduPass = user.uPass;
    var loginFormEl = document.getElementById('login-form');

    if ( !uNameEl.value || !uPassEl.value ) {
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

    uPassEl.addEventListener( 'blur', function () {
        noSpace( uPassEl );
    });

    buttonEl.addEventListener( 'click' || 'enter', function () {
        checkLogin();
    });
}
