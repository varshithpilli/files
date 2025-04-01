import React from 'react'
import Card from './Card'
import Inception from '../public/inception.jpg'
import Interstellar from '../public/interstellar.jpg'
import Oppenheimer from '../public/oppenheimer.png'
import Titanic from '../public/titanic.jpg'
function App() {
  return (
    <div className='main-body'>
      <Card
      image = {Inception}
      title = "Inception"
      desc = "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move."
      />
      <Card
      image = {Interstellar}
      title = "Interstellar"
      desc = "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
      />
      <Card
      image = {Oppenheimer}
      title = "Oppenheimer"
      desc = "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history."
      />
      <Card
      image = {Titanic}
      title = "Titanic"
      desc = "It was a fictionalized account of the sinking of the RMS Titanic and followed the forbidden romance of a beautiful first-class woman (Kate Winslet) and a penniless third-class artist (Leonardo DiCaprio) aboard the ill-fated maiden voyage of the RMS Titanic. The film also stars Kathy Bates, Frances Fischer, Gloria Stuart, Bernard Hill, Jonathan Hyde, Victor Garber, David Warner, Danny Nucci, Suzy Amis and Bill Paxton. Cameron saw the love story as a way to engage the audience with the real life tragedy."
      />
      
    </div>
  )
}

export default App