import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component{

// attributs



// methods
render(){
    const def="grise";
    const voit = {color:"grise", brand:"Peugeot", owner:"None", id:"WWWWWW"};
    // on ouvre les parentheses pour injecter de l'html via l'annotation JSX - JavaScript Xml ET on execute la logique du code dans les {}
    // c'est ici que l'on defini le contenu html affichable à l'appel de la balise <Garage /> dans index.js
    return (

        <div>
            <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
            <Voiture color='verte' brand="Mustang" owner="Sylvain" id="NZ78W2"/><br/>
            <Voiture color='rouge'brand="Mercedes" owner="Jean" id="A788W2" /><br/>
            <Voiture color='bleue' brand="Ford" owner="Dalida" id="QZ88W2"/><br/>
            <Voiture color='jaune' brand="Citroen" owner="Lucile" id="RG5124"/><br/>
            <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/>
        </div>

    );
}


}

export default Garage;