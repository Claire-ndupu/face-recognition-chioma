import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';

import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Rank from './Components/Rank/Rank.js';
// import Clarifai from 'clarifai';
import './App.css';
import Particles from "react-tsparticles";


// const app = new Clarifai.App({
//   apiKey: '476ebb2498d84178ae403cf99b35840a'
// });

const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

const particlesOptions = {
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 100,
          },
          
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit= ()=>{
    console.log('click');

    // app.models.predict(
    //   // "f76196b43bbd45c99b4f3cd8e8b40a8a",
    //   // this.state.input

    //   Clarifai.COLOR_MODEL,
    //   // URL
    //   "https://samples.clarifai.com/metro-north.jpg"
          
    //   )
    //   .then(function(response) {

    //       console.log(response);
    //     },
    //       function(err) {

    //       }

    //     );
    }

  render(){
    return (
    <div className="App">



    <Particles className = 'particles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
      
      <Navigation />
      <Logo />
      <Rank/>

     <ImageLinkForm onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit} />

    
       
     <FaceRecognition />


    </div>
  );
  }
}

export default App;
