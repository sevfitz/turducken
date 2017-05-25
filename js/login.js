'use strict';


function init(){
    if (!getFromLocalStorage()) {
        // var testUser = new User('First','Last','testuName','testuPass','../images/cartoon-hedgehog.jpg');
        console.log('creating user for the first time');
        var boo = createUser();
        pushToLocalStorage( boo );     
    }
    // console.log('running init function right now');
    // // bensonwigglepuff.render();
    // getFromLocalStorage();
}

function createUser( ) {
    // POSTS THAT WILL APPEAR IN STREAM \\
    var bensonwigglepuff = new User('Benson', 'Wigglepuff', 'boogie', 'jjboogz', '../images/bw.jpg' );
    bensonwigglepuff.posts.push( new Post('Sometimes I have an existential crisis when making a sandwich because isn’t life just a giant sandwich?','twitter'));
    bensonwigglepuff.posts.push( new Post('https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2015/11/30/19/puggle.jpg', 'instagram'));
    bensonwigglepuff.posts.push( new Post('I ate an entire jar of mayonnaise and I don’t feel so good.  Mom said that eating a jar of mayonnaise isn’t okay but she doesn’t get it.', 'facebook'));
    bensonwigglepuff.posts.push( new Post('You guys, I just made the best breakfast ever. It was super simple, you can make it with your kids and you’ll look like a superstar. Here’s the recipe: http://www.foodnetwork.com/recipes/ree-drummond/perfect-french-fries-recipe2-2120420', 'facebook'));
    bensonwigglepuff.posts.push( new Post('https://cdn.drawception.com/images/panels/2013/3-16/Yf8D6AmX5b-2.png', 'instagram'));
    bensonwigglepuff.posts.push( new Post('Man, I really wish there was an app that managed all of my social media outlets in one place…', 'twitter'));

    bensonwigglepuff.posts.push( new Post('https://pbs.twimg.com/media/C58TcbwWAAA6-CV.jpg', 'instagram'));

    bensonwigglepuff.posts.push( new Post('This girl in my class, Stephanie, was trying to explain physics to me today and she’s hella smart. I was like “omg Steph what are you talking about, girl. You’re wild.”', 'facebook'));

    bensonwigglepuff.posts.push( new Post('I just ate an entire 5lb burrito in one sitting.', 'twitter'));

    bensonwigglepuff.posts.push( new Post('https://s-media-cache-ak0.pinimg.com/736x/b5/7f/4e/b57f4e82eeea906a45d3cf49f4f4096f.jpg', 'instagram'));
    bensonwigglepuff.posts.push( new Post('Today in class we learned about local storage and it totally blew my mind. Learning how to code in general is so eye opening and I think everyone should give it a shot to see if it’s a path they might want to pursue!', 'facebook'));
    bensonwigglepuff.posts.push( new Post('Tfw Code Fellows PDX is the best place ever.',  'twitter'));
    return bensonwigglepuff;
}



init();

var checkLogin = function() {
    // check if the uName and uPass are in local storage and clear form inputs if they are not
    var user = getFromLocalStorage();
    var saveduName = user.uName;
    var saveduPass = user.uPass;
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
