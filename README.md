# Colour Input Displayer
[![Netlify Status](https://api.netlify.com/api/v1/badges/6854cbe0-2f62-4162-ab35-462dfd71c603/deploy-status)](https://app.netlify.com/sites/kareenapatel-colourinputdisplayer/deploys)

## ⌨️ Tech stack 
HTML / CSS / React / npm / Node.js / Cypress (Testing)

## 🍼 Introduction
Updating arrays in state is a concept I had little practice in in React. Therefore I created a colour input displayer as a mini project to recap the concept. This application enables the user to enter a hex code which will be displayed in a list. However each code entered will have the background colour of that hex code. The user can delete any items and any time and the order of items will be retained. 

## 🛠️ Features
- Regex used to validate input against rules
    - Is a length of 3 or 6
    - Contains the accepted characters (0-9, a-f, A-F)
- Able to add a colour to the list
- Able to delete any colour in any place in the list
- Colour entered becomes the background colour of the listed item with the hex value displayed.
- Allows duplicate colours to be displayed and deleted independently (through an id prop)
- Implemented accessibility throughout application
- Additional branch called 'testing' for unit tests and component tests

## 📚 Resources
- Updating arrays in state (React Docs) - https://react.dev/learn/updating-arrays-in-state
- Deleting an item from an array in react - https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
- Validating a hex value using Regex - https://gist.github.com/daxburatto/307e8365c41fd5401f9ac315676490bf
- Learn E2E testing with Cypress for Javascript Applications  (FreeCodeCamp) - https://www.freecodecamp.org/news/mastering-end-to-end-testing-with-cypress-for-javascript-applications/
- Cypress, React and Vite collaboration (Rodion Kazennov - Medium) - https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc

## ➕ Potential features to add
- Updating the hex value of an item
- Having the user move or order the items themselves
- Ability to delete all items or delete items which aren't locked
- Sorting / Filtering mechanism
