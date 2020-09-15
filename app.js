const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const container = document.querySelector('.container');

let counter=0;


next.addEventListener('click',nextslide)
previous.addEventListener('click',previouslide)

function nextslide(){
container.animate([{opacity:'0.5'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
    if(counter === 5){
        counter=-1;
    }
    counter++;
    
    container.style.backgroundImage = `url(images/img-${counter}.jpg)`;
    
}
function previouslide(){
    container.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})

    if(counter === 0){
        counter=6;
    }
    counter--;
    
    container.style.backgroundImage = `url(images/img-${counter}.jpg)`;
}    
