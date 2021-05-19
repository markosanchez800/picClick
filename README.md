# Vault Tec Memory Test

## Site Pic
![Image](memgamegif.gif)

## Summary
This app is a memory game centered around clicking all twelve pictures without any repeations.  I used a video game called Fallout New Vegas as the theme for the game and the design of the page.  The app is created using React for a responsive layout and is all written in JavaScript, CSS, and 'HTML'(JSX).  The twelve cards displayed on the screen are an array of objects populated from JSON data and upon clicking one its checked against the cards you've already clicked and randomizes the array to shuffle around the cards.

## Technology Used
- React - Used as the JavaScript library to create the entire app
- Node.js - Used to be able to run all processes through the command line
- JavaScript - Language used to write the entire application
- Bootstrap - Used for general styling of the page elements like cards and jumbotrons
- CSS - Used for all specific styling used on the page
- Github - Used to track commits and changes as well as host the deployed site


## Code Snippet
Function used to randomize the array after each correct click
```
  shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--)
    {
      let rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]]
    }
  }
```

## Author Links
- [LinkedIn] (https://www.linkedin.com/in/marko-sanchez-800)
- [GitHub] (https://github.com/markosanchez800)