
const tweetForm = document.querySelector('#tweetForm');

const usernameInput = document.querySelectorAll('input')[0];
const tweetmsg = document.querySelectorAll('input')[1];

const basicTweet = function(){    
    const tweetul = document.querySelector('#tweetUL');
    const Li = document.createElement('li');
    
   
    Li.innerText = `${tweetForm.elements.user.value}: ${tweetForm.elements.tweet.value}`;
    tweetul.append(Li);
    usernameInput.value = "";
    tweetmsg.value = "";

}

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    const ev = basicTweet();
    
})
/*
tweetForm.addEventListener('submit', function(e){
    
    console.log(tweetForm.element.username.value);
    e.preventDefault();
})*/


