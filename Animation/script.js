const animationElements = document.querySelectorAll('.show-on-scroll')


function toggleAnimation(element) {
    let rect =  element.getClientRects()
    let heightScreen = window.innerHeight

    // check xem element co ben trong man hinh hay khong
    if(!(rect[0].bottom < 0 || rect[0].top > heightScreen)) {
        // ben trong thi lot vao day
        element.classList.add('start')
    } else {
        // ngoai thi lot vao day
        element.classList.remove('start')
    }
}

function checkAnimation() {
    animationElements.forEach(function(el) {
        toggleAnimation(el)
    })
}

window.onscroll = checkAnimation
