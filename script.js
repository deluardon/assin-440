// console.log('clicked');

// const btn = document.createElement('plus-btn');

let count = 0;
function clickMe(){
    const broken = document.getElementById('count');
    count += 1;
    broken.innerText=count;
    console.log('hello');
}
// const btn = document.getElementById('plus-btn');
// btn.addEventListener('click',function(){
    
// })
const btn = document.getElementById('minus-btn');
btn.addEventListener('click',function(){
    const broken = document.getElementById('count');
    count -= 1;
    broken.innerText=count;
    console.log('click');
})