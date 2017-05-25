'use strict';

function User(fName, lName, uName, uPass, img) {
    this.fName = fName;
    this.lName = lName;
    this.uName = uName;
    this.uPass = uPass;
    this.img = img;
    this.posts = [];
    this.saveLogin();
}

User.prototype.newPost = function (content, socMedia) {
    this.posts.push(new Post(content, socMedia));
    pushToLocalStorage(this);
};


User.prototype.render = function () {

    var cardStream = document.getElementById('cards-container');
    var currentUser = bensonwigglepuff;
    

    for (var i = 0; i < currentUser.posts.length; i++) {
        
        var ele1 = document.createElement('div');
        // ele1.setAttribute('id', i + '.1');
        ele1.setAttribute('class', 'card blue-grey darken-1');

        var ele2 = document.createElement('div');
        // ele2.setAttribute('id', i + '.2');
        ele2.setAttribute('class', 'card-content white-text');

        var ele3 = document.createElement('p');
        // ele3.setAttribute('id', i + '.3');
        var currentPost = this.posts[i];
        console.log('currentPost: ' + currentPost.content);
        var node = document.createTextNode(currentPost.content);
        ele3.appendChild(node);

        var ele4 = document.createElement('div'),
        a = document.createElement('a'),
        node = document.createTextNode(currentPost.time),
        img = document.createElement('img');
        ele4.className = 'card-action';
        // node.textContent = currentPost.time;
        img.src = "images/" + currentPost.socMedia + ".png";
        a.href = "http://www.facebook.com";
        a.appendChild(img);
        a.appendChild(node);
        ele4.appendChild(a);

        ele1.appendChild(ele2);
        ele2.appendChild(ele3);
        ele1.appendChild(ele4);
        cardStream.appendChild(ele1);

        
        // ele4.setAttribute('class', 'card-action');
        // var ele5 = document.createElement('a');

        
        // ele5.setAttribute('href', 'http://www.twitter.com');
        // ele5.setAttribute('src', 'js/fb_30.png');
        // ele5.setAttribute('innerText', 'test link text');


        // var ele5 = document.createElement('a');
        // ele5.setAttribute('id', i + '.5');
        // ele5.setAttribute( 'src', 'images/twitter_30.png');
        
        // Render to DOM in proper order

        

    }
}


User.prototype.saveLogin = function () {
    // save the uName and uPass in localStorage
    localStorage.setItem('uName', JSON.stringify(this.uName));
    localStorage.setItem('uPass', JSON.stringify(this.uPass));
};

function Post(content, socMedia) {
    this.content = content;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
    
}

