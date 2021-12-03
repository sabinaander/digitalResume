// Gets the hamburger button, hamburger icon and menu
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
 * @param {HTMLElement} container 
 */
function closeContainer(container) {
    container.classList.remove('active')
}

/**
 * Creates a container with given ID.
 * Appends it to a parent if a parent is given.
 * Returns container
 * @param {string} htmlTag
 * @param {string} id
 * @param {HTMLElement} parent
 * @return {HTMLDivElement}
 */
function createContainer(htmlTag, id, parent) {
    const container = document.createElement(htmlTag)
    container.id = id

    if(parent) {
        parent.appendChild(container)
    }

    return container
}

/** 
 * Open up bigger image, when small image is clicked
 * @param {MouseEvent} event
 */
function openImage(event) {
    // Gets containers
    /** @type {HTMLDivElement} */
    let container = document.getElementById('container')
    let bigImageContainer = document.getElementById('bigImageContainer')
    let shadowContainer = document.getElementById('shadowContainer')
    let subPageContainer = document.getElementById('subPageContainer')

    // If no container, create container
    if (!container) {
        container = createContainer('DIV', 'container', subPageContainer)
    }
    
    // If no shadowContainer, create container
    if (!shadowContainer) {
        shadowContainer = createContainer('DIV', 'shadowContainer', container)

        // Adds click eventlistener to shadowContainer to close state
        shadowContainer.addEventListener('click', function () {
            closeContainer(container)
        })
    }

    // If no bigImageContainer, create container
    if (!bigImageContainer) {
        bigImageContainer = createContainer('DIV', 'bigImageContainer', container)
    }
    
     /** @type {HTMLImageElement} */
    const clickedImage = event.target

    // creates copy of clicked image
    let createImage = document.createElement('img')
    createImage.setAttribute('src', clickedImage.src)
    
    // Empty bigImageContainer
    bigImageContainer.innerHTML = ''
    
    // Add image copy to bigImageContainer
    bigImageContainer.appendChild(createImage)

    // Show container
    container.classList.add('active')
}