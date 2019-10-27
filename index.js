

const cursion = document.querySelector('.cursion');
const arrowl = document.querySelector('.arrow-l');
const arrowr = document.querySelector('.arrow-r');
const ulfather = document.getElementById('ulfather');
ulfather.appendChild(ulfather.children[0].cloneNode(true));
let step = 0;

let flag = true;
const animate = (obj, target, callback) => {

    obj.timer = setInterval(() => {
        let currentStep = (target - obj.offsetLeft) / 10;
        
        currentStep = currentStep > 0 ? Math.ceil(currentStep) : Math.floor(currentStep);

        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            callback && callback();
        } 
        
        obj.style.left = obj.offsetLeft + currentStep + 'px';
        
    }, 15);
}
arrowl.addEventListener('click', () => {
   if(flag) {
       flag = false;
       ++step;
       animate(ulfather, -step*cursion.offsetWidth, () => {
           if( step == 4 ){
               step = 0 ;
               ulfather.style.left = 0;
           }
          flag = true;
       })
   }
   
})
arrowr.addEventListener('click', () => {
   if (flag) {
       flag = false;
       --step;
       animate(ulfather, -step*cursion.offsetWidth, () => {
           if( step == 0 ) {
               step = 4;
               ulfather.style.left = -4*cursion.offsetWidth + 'px';

           }
           flag = true
       })
   }
})


