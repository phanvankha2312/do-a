var slides = document.querySelector('.slide-row')
var befores = document.querySelectorAll('.slide-bf')
var afters = document.querySelectorAll('.slide-af')

var up = 0
// cách 1
for(var i of afters) {
    i.addEventListener('click',()=> {
        up+= 100
        slides.style.transform = `translateX(-${up}% )`
        if(up === 300) {
            up = 0
          return  (slides.style.transform = `translateX(-${up}% )`)
        }
    })
}
for(var i of befores) {
    i.addEventListener('click',()=> {
        if(up === 0) {
            up = 200
          return  (slides.style.transform = `translateX(-${up}% )`)
        }
        up-= 100
        slides.style.transform = `translateX(-${up}% )`
    })
}
// cách 2
// afters[0].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( -100% )'
// })
// afters[1].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( -200% )'
// })
// afters[2].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( 0 )'
// })
// befores[0].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( -200% )'
// })
// befores[1].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( 0)'
// })
// befores[2].addEventListener('click', ()=> {
//     slides.style.transform = 'translateX( -100% )'
// })

var heart = document.querySelectorAll('.heart-plus')

for(var i of heart) {
    i.addEventListener('click',(e)=> {
        e.currentTarget.classList.toggle('icon-heart-tym')
        
    })
}

// newssss
var newRight = document.querySelector('.news-right')
var newLeft = document.querySelector('.news-left')
var newsrow = document.querySelector('.news-row')
var roll = 0
newRight.addEventListener('click',() => {
    roll += 25
    newsrow.style.transform = `translateX(-${roll}%)`
    // newsrow.style.display = 'none'
    if(roll > 100) {
       roll = 0
     return  newsrow.style.transform = `translateX(-${roll}%)`
    
    }
})
newLeft.addEventListener('click',() => {
    roll -= 25
    if(roll < 0) {
        roll = 100
      return  newsrow.style.transform = `translateX(-${roll}%)`
     }
    newsrow.style.transform = `translateX(-${roll}%)`
    // newsrow.style.display = 'none'
   
})
// modal

var menu = document.querySelectorAll('.menu') 
var modal = document.querySelector('.modal')
var modalContent = document.querySelector('.modal-content')

for(var i of menu) {
    i.addEventListener('click',(e)=> {
        modal.classList.toggle('open')
    })
}
modal.addEventListener('click',()=> {
    modal.classList.toggle('open')
})
modalContent.addEventListener('click',(e)=> {
    e.stopImmediatePropagation()
})

