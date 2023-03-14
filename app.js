const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
const colors='rgb('+ random(255)+','+random(255)+','+random(255)+')'
document.body.style.backgroundColor= colors;
});

function random(number){
    return Math.floor(Math.random()*(number+1))
}