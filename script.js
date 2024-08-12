class Text{
        constructor(obj){
                this.elem = document.querySelector(obj.el)
                this.txt = this.elem.innerHTML
                this.elem.innerHTML = '';
                this.str()
        }
        str(x = 0){
                this.elem.innerHTML = this.elem.innerHTML + this.txt[x]
                x++
                if (x < this.txt.length) {
                        setTimeout(() => {
                                this.str(x)
                        }, 100);
                }
        }
}
const text = new Text({
    el:'.header__box-text'
})
const tabs = [...document.querySelectorAll('.header__item-text')]
const contentImg = [...document.querySelectorAll('.header__item-box')]
const stops = document.querySelector('.stop')
const active = document.querySelector('.active')
stops.style.display = 'none'
tabs.forEach((item,idx)=>{
    tabs[idx].addEventListener('click',()=>{
        contentImg.forEach((items, id)=>{
            tabs[id].classList.remove('color')
            if (contentImg[id].classList.contains('stop')) {
                setTimeout(() => {
                    stops.style.display = 'grid'
                    active.style.display = 'none'
                }, 250);
            }
        })
        tabs[idx].classList.add('color')
        if (contentImg[idx].classList.contains('stop')) {
            setTimeout(() => {
                stops.style.display = 'none'
                active.style.display = 'grid'
            }, 250);
        }
        
    })
})

// scroll

window.addEventListener('scroll',()=>{
    const nav = document.querySelector('.navbar')
    const progressBar = document.querySelector('.progress__bar')
    nav.classList.toggle('nav_active',window.scrollY > 0)
    if (!progressBar.classList.contains('active') && window.scrollY > 80) {
        progressBar.classList.add('active')
    }
    // progressBar.classList.toggle('active')
})









const slider = [...document.querySelectorAll('.kitchen__launch')]
const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const box = document.querySelector('.kitchen__box')
// console.log(btnRight);

let i = 0

btnLeft.addEventListener('click', ()=>{
    slider[i].style.display = 'none'
    i++
    if (i >= slider.length) {
        i = 0
    }
    slider[i].style.display = 'flex'
})
btnRight.addEventListener('click' , ()=>{
            slider[i].style.display = 'none'
            console.log(i);
            i--
            if (i < 0) {
                    i = slider.length - 1
            }
            slider[i].style.display = 'flex'
})
function autotime() {
        slider[i].style.display = 'none'
        console.log(i);
        i++
        if (i >= slider.length) {
                i = 0
        }
        slider[i].style.display = 'flex'
}
// let autoTime = setInterval(autotime,1000)

//? let autoTime = setInterval(() => {
//?         autotime()
//? }, 1000);

// function stop() {
//         clearInterval(autoTime)
// }
// box.addEventListener('mouseover' ,() =>{
//         stop()
// })
// function start() {
//         return autoTime = setInterval(autotime,1000)
// }
// box.addEventListener('mouseout', () =>{
//         start()
// })
const rangItems = document.querySelectorAll('.rang__items')
const rangLeft = document.querySelector('.rangLeft')

for (let i = 0; i < rangItems.length; i++) {
    rangItems[i].addEventListener('click',function(e){
        this.classList.toggle('active')
    })
}



const progressLine = document.querySelector('.progress__line')

window.addEventListener('scroll',()=>{
    let pageScrolled = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressLine.style.width = `${(pageScrolled / height) * 100}%`
})


const burger = document.querySelector('.burger')
const span = document.querySelector('.burger span')
const navList = document.querySelector('.nav__list')
const header = document.querySelector('.header')
const navBox = document.querySelector('.nav-box')
console.log(span);

burger.addEventListener('click', ()=>{
    if (!burger.classList.contains('fast')) {
        burger.classList.add('fast')
        // navList.style.display = 'flex'
        navList.classList.add('active')
        navList.addEventListener('click', (e)=>{
            
        })
    }
    else{
        burger.classList.remove('fast')
        navList.classList.remove('active')
    }
})












