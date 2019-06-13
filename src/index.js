import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import Garage from './Garage';
import Game from './Game';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

// function Tick2(){
//     const element= (
//         <div>
//             <h1>Heure locale</h1>
//             <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

//     ReactDOM.render(element,document.getElementById('popo2') );

// }

// l'appelle à la fonction Tick2 chaque seconde 
//setInterval(Tick2, 1000);

ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock/>, document.getElementById('popo'));
// Ci dessous une manière d'appeler un composant à partir d'une fonction
//ReactDOM.render(<Tick />,document.getElementById('popo') );


//ReactDOM.render(<Garage />,document.getElementById('popo') );





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
