// function to toggle menu open/closed
const hamburgerMenuBtn = document.querySelector(".hamburgerMenuBtn")
const menu = document.querySelector(".menu")

const hamburgerIcon = document.querySelector(".hamburgerIcon")

hamburgerMenuBtn.addEventListener('click', function() {
    menu.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')

})

function closeContainer(container) {
 container.classList.remove('active')
 console.log(closeContainer)
}

//Gallery function to open up bigger image
function openImage(event) {
    let container = document.getElementById('container')
    let bigImageContainer = document.getElementById('bigImageContainer')
    let shadowContainer = document.getElementById('shadowContainer')

    if (!bigImageContainer) {
        container = document.createElement('div')
        container.id = 'container'
        shadowContainer = document.createElement('div')
        shadowContainer.id = 'shadowContainer'
        bigImageContainer = document.createElement('div')
        bigImageContainer.id = 'bigImageContainer'
        container.appendChild(bigImageContainer)
        container.appendChild(shadowContainer)
        console.log("adding eventlistener ")
        shadowContainer.addEventListener('click', function() {
            closeContainer(container)
        })
    }

    let subPageContainer = document.getElementById('subPageContainer')
    let createImage = document.createElement('img')
    createImage.setAttribute('src', event.target.src)
    bigImageContainer.innerHTML=''
    bigImageContainer.appendChild(createImage)
    subPageContainer.appendChild(container)
    
    container.classList.add('active')
}