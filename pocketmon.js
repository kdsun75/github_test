
//#username이 비어있을때 'Enter Your Username'로 변경해줘!

const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e){
    
    if(input.value.length === 0){
        
        h1.innerText = 'Enter Your Username';
    }else{
        h1.innerText = `Welcome, ${input.value}`;
    }
})


