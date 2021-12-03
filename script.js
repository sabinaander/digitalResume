// Gets the hamburger icon and menu
const hamburgerMenuBtn = document.querySelector(".hamburgerMenuBtn")
const menu = document.querySelector(".menu")

const hamburgerIcon = document.querySelector(".hamburgerIcon")

// Adds event listener to menu button to toggle menu open/closed
hamburgerMenuBtn.addEventListener('click', function () {
    menu.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')

})


/**
 * Function to remove the active state of container, and close the big image
 * @param {HTMLDivElement} container 
 */
function closeContainer(container) {
    container.classList.remove('active')
}
 
/** 
 * Open up bigger image, when small image is clicked
 * @param {MouseEvent} event
 */
function openImage(event) {
    // Gets containers
    let container = document.getElementById('container')
    let bigImageContainer = document.getElementById('bigImageContainer')
    let shadowContainer = document.getElementById('shadowContainer')

    // If no containers are found, create containers
    if (!container) {
        container = document.createElement('div')
        container.id = 'container'
    }
    
    if (!shadowContainer) {
        shadowContainer = document.createElement('div')
        shadowContainer.id = 'shadowContainer'
        container.appendChild(shadowContainer)

        // Adds click eventlistener to shadowContainer to close state
        shadowContainer.addEventListener('click', function () {
            closeContainer(container)
        })
    }

    if (!bigImageContainer) {
        bigImageContainer = document.createElement('div')
        bigImageContainer.id = 'bigImageContainer'
        container.appendChild(bigImageContainer)
    }

    // gets container
    let subPageContainer = document.getElementById('subPageContainer')
    
     /** @type {HTMLImageElement} */
    const clickedImage = event.target

    // creates copy of clicked image
    let createImage = document.createElement('img')
    createImage.setAttribute('src', clickedImage.src)
    
    // Empty bigImageContainer
    bigImageContainer.innerHTML = ''
    
    // Add image copy to bigImageContainer
    bigImageContainer.appendChild(createImage)

    // Add container to subContainer
    subPageContainer.appendChild(container)

    // Show container
    container.classList.add('active')
}