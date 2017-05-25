'use strict';

function User(fName, lName, uName, uPass, img) {
    this.fName = fName;
    this.lName = lName;
    this.uName = uName;
    this.uPass = uPass;
    this.img = img;
    this.posts = [];
}

User.prototype.newPost = function (content, socMedia) {
    this.posts.push(new Post(content, socMedia));
    pushToLocalStorage(this);
    console.log('new post');
    console.table(this);
};


User.prototype.render = function () {

    var cardStream = document.getElementById('cards-container');
    var currentUser = bensonwigglepuff;


    for (var i = 0; i < currentUser.posts.length; i++) {

        var currentPost = this.posts[i];

        // if (currentPost.socMedia !== 'instagram') NOTE: Stubbed out for instagram support.

            var ele1 = document.createElement('div');
            ele1.setAttribute('class', 'card blue-grey darken-1');

            var ele2 = document.createElement('div');
            ele2.setAttribute('class', 'card-content white-text');

            var ele3 = document.createElement('p');
            var node = document.createTextNode(currentPost.content);
            ele3.appendChild(node);

            var ele4 = document.createElement('div'),
                a = document.createElement('a'),
                date = document.createTextNode(currentPost.time),
                logo = document.createElement('img');
            ele4.className = 'card-action';
            logo.src = "images/" + currentPost.socMedia + ".png";
            a.href = "http://www.facebook.com";
            a.appendChild(logo);
            a.appendChild(date);
            ele4.appendChild(a);

            ele1.appendChild(ele2);
            ele2.appendChild(ele3);
            ele1.appendChild(ele4);
            cardStream.appendChild(ele1);

        // } else { NOTE: stubbed out for instagram support.

            // var ele1 = document.createElement('div');
            // ele1.setAttribute('class', 'card horizontal');

            // var ele2 = document.createElement('div'),
            //     img = document.createElement('img');
            // ele2.className = 'card-image';
            // img.src = currentPost.image;
            // ele2.appendChild(img);

            // var ele3 = document.createElement('div');
            // ele3.className = 'card-stacked';

            // var ele4 = document.createElement('div');
            // ele4.className = 'card-content';

            // var ele5 = document.createElement('p');
            // var node = document.createTextNode(currentPost.content);
            // ele5.appendChild(node);

            // var ele6 = document.createElement('div'),
            //     a = document.createElement('a'),
            //     date = document.createTextNode(currentPost.time),
            //     logo = document.createElement('img');
            // ele6.className = 'card-action';
            // logo.src = "images/" + currentPost.socMedia + ".png";
            // a.href = "http://www." + currentPost.socMedia + ".com";
            // a.appendChild(logo);
            // a.appendChild(date);
            // ele6.appendChild(a);

            // ele1.appendChild(ele2);
            // ele1.appendChild(ele3);
            // ele4.appendChild(ele3);
            // ele6.appendChild(ele4);
            // cardStream.appendChild(ele1);

        }

    }


function Post(content, socMedia) {
    this.content = content;
    this.socMedia = socMedia;
    this.time = new Date().getTime();
    // this.image = image;

}

