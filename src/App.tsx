import React from 'react';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TextWrapImage from './components/sections/TextWrapImage'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <TextWrapImage
        heading="Maceo the cat"
        imageUrl="images/circle.png"
        altText="Maceo the cat"
        imagePosition="left"
      >
        <p>
          Chill on the couch table. If it fits, i sits throw down all the stuff in the kitchen use lap as chair, 
          so lay on arms while you're using the keyboard. Who's the baby i is not fat, 
          i is fluffy but annoy the old grumpy cat, start a fight and then retreat to 
          wash when i lose. Meow all night having their mate disturbing sleeping humans 
          what the heck just happened, something feels fishy and stare at imaginary bug or 
          stinky cat sit in a box for hours for loves cheeseburgers. Make muffins with tail in the air, 
          so throw down all the stuff in the kitchen, so meeeeouw. Mess up all the toilet paper love and 
          coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the 
          glittery gleaming yarn to him (the yarn is from a $125 sweater) so twitch tail in permanent irritation, 
          destroy the blinds. Poop in the plant pot knock dish off table head butt cant eat out of my own dish 
          so slap kitten brother with paw and cat fur is the new black yet meow meow you are my owner so here 
          is a dead rat so spill litter box, scratch at owner, destroy all furniture, especially couch destroy dog. 
          Brown cats with pink ears being gorgeous with belly side up, poop in the plant pot. Sleep all day 
          whilst slave is at work, play all night whilst slave is sleeping. Cats go for world domination. 
          Cat fur is the new black kitty loves pigs so stare at the wall, play with food and get confused 
          by dust for purr as loud as possible, be the most annoying cat that you can, and, knock everything 
          off the table yet snob you for another person. Litter box is life gnaw the corn cob, love you, 
          then bite you kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, 
          don't i look cute? but time to go zooooom. Litter box is life then cats take over the world i heard 
          this rumor where the humans are our owners, pfft.
        </p>
      </TextWrapImage>
      <TextWrapImage
        heading="Shiba the cat"
        imageUrl="images/circle.png"
        altText="Maceo the cat"
        imagePosition="right"
      >
        <p>
          Chill on the couch table. If it fits, i sits throw down all the stuff in the kitchen use lap as chair, 
          so lay on arms while you're using the keyboard. Who's the baby i is not fat, 
          i is fluffy but annoy the old grumpy cat, start a fight and then retreat to 
          wash when i lose. Meow all night having their mate disturbing sleeping humans 
          what the heck just happened, something feels fishy and stare at imaginary bug or 
          stinky cat sit in a box for hours for loves cheeseburgers. Make muffins with tail in the air, 
          so throw down all the stuff in the kitchen, so meeeeouw. Mess up all the toilet paper love and 
          coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the 
          glittery gleaming yarn to him (the yarn is from a $125 sweater) so twitch tail in permanent irritation, 
          destroy the blinds. Poop in the plant pot knock dish off table head butt cant eat out of my own dish 
          so slap kitten brother with paw and cat fur is the new black yet meow meow you are my owner so here 
          is a dead rat so spill litter box, scratch at owner, destroy all furniture, especially couch destroy dog. 
          Brown cats with pink ears being gorgeous with belly side up, poop in the plant pot. Sleep all day 
          whilst slave is at work, play all night whilst slave is sleeping. Cats go for world domination. 
          Cat fur is the new black kitty loves pigs so stare at the wall, play with food and get confused 
          by dust for purr as loud as possible, be the most annoying cat that you can, and, knock everything 
          off the table yet snob you for another person. Litter box is life gnaw the corn cob, love you, 
          then bite you kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, 
          don't i look cute? but time to go zooooom. Litter box is life then cats take over the world i heard 
          this rumor where the humans are our owners, pfft.
        </p>
      </TextWrapImage>
    </>
  )
}

export default App
