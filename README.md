# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This project is a challenge from [Frontend Mentor](https://www.frontendmentor.io) to implement a home page design for a news website. The project has starter file including images, icons, and design.
### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- must have responsive naviagtion depending on the device
### Screenshot

![](/assets/images/Screenshot%202023-05-19%20154802.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- JS library

### What I learned
This challenge pushed me to explore different properties of flex box and understand the role of media query to make a website responsive. The navigation for this website taught to me to manipulate properties of css to performe a certain action using javascript.

```js
  navToggle.addEventListener('click', () =>{

    const visibility = primaryNav.getAttribute('data-visible');
    const darken = darkenBackground.getAttribute('data-visible');

    if(visibility === "false" && darken === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded',true);
        darkenBackground.setAttribute('data-visible',true);
    }
  })
```
### Continued development

For the next challenge I want to continue to learn more css properties, measurements, and approach project from mobile-first workflow. In addition, I'm looking forward to learn more about javascript.

### Useful resources

- [Kevin Powell](https://www.youtube.com/@KevinPowell/featured) - This youtube channel is the best to learn everything about frontend webdevelopment. I have used his videos to tackel  challenging problems and come up with a solution. I heard about [Frontend Mentor](https://www.frontendmentor.io) from one of his videos. 
- [W3school](https://www.w3schools.com) - This is an amazing resource for getting brief explanation for your questions. 

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) - This is amazing resource for webdevelopment in general. I have used it to study about media queries.
- [stackOverflow](https://stackoverflow.com/)
## Author

- [Mesgana Geletu](https://www.your-site.com)
- Frontend Mentor - [@mesganaG](https://www.frontendmentor.io/profile/mesganaG)

## Acknowledgments

Shout out to [Kevin Powell](https://www.youtube.com/@KevinPowell/featured) his videos were inspirational and helpful. 
