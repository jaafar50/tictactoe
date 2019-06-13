import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import Garage from './Garage';
import Game from './Game';
import Clock from './Clock';
import Mailbox from './Mailbox';
import Toggle from './Toggle';
import Liste from './Liste';
import NameForm from './NameForm';
import LoginControl from './LoginControl';
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

ReactDOM.render(<LoginControl />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock/>, document.getElementById('popo'));
//ReactDOM.render(<Toggle/>, document.getElementById('popo2'));

const numbers= [4,9,3,8,2];

ReactDOM.render(<Liste numbers={numbers}/>, document.getElementById('popo3'));
ReactDOM.render(<NameForm/>, document.getElementById('popo4'));

const messages= ['coucou j espere que tu passes une bonne journee', 'Re ca va', 'bye je pars'];

ReactDOM.render(<Mailbox messagesnonlus={messages}/>, document.getElementById('popo2'));
// Ci dessous une manière d'appeler un composant à partir d'une fonction
//ReactDOM.render(<Tick />,document.getElementById('popo') );


//ReactDOM.render(<Garage />,document.getElementById('popo') );





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
