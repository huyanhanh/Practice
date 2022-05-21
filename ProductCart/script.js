const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const images = $$('.image img')
const prev = $('.prev')
const next = $('.next')
const close = $('.close')
const galleryImg = $('.gallery-inner img')
const gallery = $('.gallery')

let currentIndex = 0

function show() {
    if(currentIndex == 0 ) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=> {
    item.onclick = () => {
        currentIndex = index
        show()
    }
})

close.onclick = () => {
    gallery.classList.remove('show')
}

document.onkeydown = (e) => {
    return e.keyCode == 27 ? gallery.classList.remove('show') : undefined
}

prev.onclick = () => {
    if(currentIndex > 0) {
        currentIndex--;
        show()
    } 
}

next.onclick = () => {
    if(currentIndex < images.length - 1) {
        currentIndex++;
        show()
    } 
}


