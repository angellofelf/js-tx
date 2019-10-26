

const cursion = document.querySelector('.cursion');
const arrowl = document.querySelector('.arrow-l');
const arrowr = document.querySelector('.arrow-r');
const ulfather = document.getElementById('ulfather');

let step = 0;

arrowl.addEventListener('click', () => {
    console.log(step-1)
    if(--step === -1) {
        step = 2;
        ulfather.style.left = ulfather.offsetLeft - 721*3 + 'px';
    }
    ulfather.style.left = ulfather.offsetLeft + 721 + 'px';
})
arrowr.addEventListener('click', () => {
    if(++step === 3){
        step = 0;
        ulfather.style.left = ulfather.offsetLeft + 721*3 + 'px';
    }
    ulfather.style.left = ulfather.offsetLeft - 721 + 'px';;
})