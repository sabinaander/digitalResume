The README file for Sabina Andersson's digital CV

# Digital CV for Sabina Andersson
### Author: Sabina Andersson

This application is supposed to showcase the personal traits, knowledge and progress when it comes to coding in general for a developer. 


# Featured in the first build;
Date: 12/3-2021
## Main design and front page.
The main colors chosen to work with are contrasting white/light gray and black. 
The font used is a all-caps bold font called "bebas neue" that also add depth to the contrasting design.

On the first main page there is a wider header (header) with a container (.container) which consists of a name/title (h1), a profile picture linking the "about-me page" when clicked (a + img), and the tag-line (h3). The header also includes a hamburger menu icon (hamburgerMenuBtn).

Below the header there's a box (.mainContainer) with introducing text (h2, p) and a row container (.rowContainer) that features the knowledge in certain areas in three divs (.contentSection).

After this comes a "my projects" container (.projectContainer), with a hexagon "gallery" (.gridContainer, .hexagon, .projectX, .hexStyle) for desktop, and rectangular "gallery" for mobile and tablets. 

At the very bottom is a footer (footer, .footerContainer) with contact info (.contactContainer), social media links (.socialMedia) and copyright (.copyright), this footer is used in all pages.

## About me page / general info subpages
This page (body .subPage) features a smaller header (reused in all sub-pages, .secondHeader), a main container (.subPageContainer #subPageContainer, used in all sub-pages) with a container (.sectionContainer) for text (.textSection) and a container for pictures (.imageSection).

## Gallery page
The gallery is built with grids (.galleryContainer), and all content (.previewImage) is manually placed via data-col and data-row to please my liking of the grid structure.
The gallery pictures scale when being hovered on, and will open up to a bigger image when clicked. 
To close the bigger image the user clicks the background around the image, which is shaded in a gray tone (#shadowContainer). 
This is all controlled in script.js, where openImage() is to open up a bigger image and a container which contains of #bigImageContainer and #shadowContainer to the main, to close these an event listener is added to the #shadowContainer to close container().

## My Projects page
This page is to present my projects, with a demo, a link to the github repo and some information regarding the project. 
Here the .subPageContainer, .rowContainer, .previewImage and .galleryItem are reused for a more structured css and design.

## Hamburger Menu
The hamburger menu (.hamburgerMenuBtn) consists of one div with a background color (.hamburgerIcon), to control the amount of lines in the .hamburgerIcon with ::before and ::after in the css. To be able to see the hamburger menu (.hamburgerMenuBtn) icon at all times mix-blend-mode: difference; is added to the CSS to contrast the colors of the icon to the background of the application.

When clicking the hamburger menu, a click event function occurs in script.js to toggle the active state of the .menu and .hamburgerIcon. The click event triggers the active state for the .hamburgerIcon to run an animation, this animation removes one of the lines, and rotates the remaining two to create a cross instead of a hamburger. The click event for the menu triggers the active state of .menu .hidden to run a slide-in animation and show the menu container(.menu.hidden::active).
To close the menu the user clicks on the hamburger menu again (which is now a cross) to run a backwards animation and remove the active state of both .menu, .hidden and .hamburgerIcon.

## Breakpoints for responsiveness
The application is built to be fully responsive down to a screen width of 320px.
Main breakpoints are defined in mediaqueries for screen widths of;
- max-width: 1024px
- max-width: 920px
- max-width: 780px
- max-width: 480px
- max-width: 390pxs

## Languages used
The laguages used for this project is JavaScript, HTML and CSS, + imported Less and SCSS for Icons from FontAwesome.

## Improvements for upcoming releases
- Add a shadowContainer behind the menu to be able to close it in other ways besides clicking the hamburgerIcon when the menu is active.
- Add a cross or / close text in the gallery when a image is opened to indicate to the user how to close the image.
- Refine the "My Projects" page with possibilities to add more text, screenshots and a better overall look. Possibly add sub-pages here in the future?

Link to my demo /live page: https://sabina.egotripp.net/




