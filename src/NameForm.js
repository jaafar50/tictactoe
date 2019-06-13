import React from 'react';

class NameForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:''
        }

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    //event.target correspond au champs de texte que l'on rempli
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Ton nom est bien ' + this.state.value);
        // A mettre en React , au lieu du return false que l'on mettait en Javascript
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" value={this.statevalue} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>

        );
    }

}

export default NameForm;