import React, { Component } from 'react';
import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate.js';
//import Counter from './state/Counter.js';
//import HelloWorld from './state/HelloWorld.js';
//import Bomb from './state/Bomb.js';
//import Roulette from './state/Roulette.js';
//import Tabs from './state/Tabs.js';
//import Accordian from './state/state-drills.js';
//import DemonymApp from './demonymapp/demonymApp.js';
import RegistrationForm from './registrationForm/registrationForm.js'

/*const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Playground</h1>
        <RegistrationForm/>
                   
    </div>
    );
  }
}

export default App;
// <Tabs tabs={tabsProp}/>
//<Accordian sections={sections}/> 