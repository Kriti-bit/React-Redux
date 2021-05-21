import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        //console.log(this.props)
        //Destructuring the props
        const { name , age , belt } = this.props;
        return(
            <div className="ninja">
                <div>Name: {name}</div> 
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        );
        //Instead of using {name}, we can use {this.props.name} if we don't want to destructure the property
    }
}

export default Ninjas;
