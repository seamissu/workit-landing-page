# Workit landing page

This is my implementation of the Workit landing page.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The project

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size (Desktop / Tablet / Mobile)
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS custom properties for Media Query
- Flexbox
- CSS Grid
- Variable fonts
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React metaframework
- [css-modules](https://github.com/css-modules/css-modules) - For component-scoped CSS styles
- [Sass](https://sass-lang.com/) - For nested media queries and SCSS variables in the dev mode

### What I learned

It's possible to combine nested media query syntax, Scss variables and CSS built-in variables like this:

```css
.wrapper {
  display: grid;
  min-height: 100%;
  grid-template-areas:
    'header'
    'main'
    'profile'
    'footer';
  grid-template-rows: 660px 730px 1fr 350px;

  position: relative;
  overflow: hidden;
  background-color: var(--ghost-white);

  --padding-identation: 160px;
  --padding-identation-tablet: 38px;
  --padding-identation-mobile: 16px;

  @media (max-width: $tablet-and-below) {
    grid-template-rows: 540px 1000px 1fr 250px;
  }

  @media (max-width: $mobile-and-below) {
    grid-template-rows: 480px 1100px 1fr 250px;
  }
}
```

### Useful resources

- [CSS variables in media query declarations](https://bholmes.dev/blog/alternative-to-css-variable-media-queries/) - This is a good article which helped me understand the difference between built-in CSS variables and Scss variables.

## Author

- Website - [Jett Zhang](https://github.com/seamissu)
