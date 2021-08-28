const inpSwitch = document.querySelector('.switcher__circle');
const text = document.querySelector('.text');
const text2 = document.querySelector('.text-2');
text.addEventListener('click',(e)=> {
    e.preventDefault();
    inpSwitch.classList.remove('rightCircle')
    inpSwitch.classList.add('leftCircle')
    text.style.color = 'white';
    text2.style.color = '#616368bf';
})
text2.addEventListener('click',(e)=> {
    e.preventDefault();
    inpSwitch.classList.remove('leftCircle')
    inpSwitch.classList.add('rightCircle')
    text.style.color = '#616368bf';
    text2.style.color = 'white';
})

const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')
const clientsCard = document.querySelectorAll('.clients__card')

clientsCard.forEach(()=> {
    firstElem(0)
    arrowLeft.addEventListener('click',()=>{
        firstElem(0)
        
        
    })
    arrowRight.addEventListener('click',()=>{
        secondElem(1)
    })
})
 
function firstElem(i) {
    clientsCard[1].classList.add('clients__card-second');
    clientsCard[i].classList.remove('clients__card-first');
    arrowRight.style.transform = 'rotate(0deg)';
    arrowRight.src = './img/arrowRight.png';
    arrowRight.style.cursor = 'pointer';
    arrowLeft.style.transform = 'rotate(0deg)';
    arrowLeft.style.cursor = 'auto';
    arrowLeft.src = './img/arrowLeft.png';
}
function secondElem(i) {
    clientsCard[0].classList.add('clients__card-first');
    clientsCard[i].classList.remove('clients__card-second');
    arrowLeft.style.transform = 'rotate(180deg)';
    arrowLeft.src = './img/arrowRight.png';
    arrowLeft.style.cursor = 'pointer';
    arrowRight.style.transform = 'rotate(180deg)';
    arrowRight.src = './img/arrowLeft.png';
    arrowRight.style.cursor = 'auto';
}

 const plus = document.querySelectorAll('.question__svg');
 const answersCard = document.querySelectorAll('.answers__card');
const answersCardQuestion = document.querySelector('.answers__card__questions')
// plus.forEach(()=> {
//     ;
//     })
// })

// function showText(num) {
//     answersCard.forEach(()=>{
//         answersCard[num].classList.add('answers__card__active')
//     })
// }
plus.forEach(element => {
    element.addEventListener('click',clicks)
    
    
})


function clicks(event) {
    const targ =  event.target;
    if (targ.classList.contains('plus')) {
        showText(targ.parentElement);
	    targ.src = './img/minus.svg';
        targ.classList.remove('plus');
        
    } else {
        console.log(1)
        targ.src = './img/plus.svg';
        targ.classList.add('plus');
        hideAll(targ.parentElement)
    }
    // if (targ.src = '/img/minus.svg'){
    //     // hideAll()
    //     console.log(1)
    	

    // }
    // else{
    //     // hideAll();
    //     
    // }
}
function hideAll(textEls) {
    textEls.parentElement.classList.remove('answers__card__active')
}
function showText(textEl) {
    textEl.parentElement.classList.add('answers__card__active')
}
