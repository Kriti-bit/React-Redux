import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        //console.log(this.props)
        //Destructuring the props
        //const { name , age , belt } = this.props;
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja =>{
            return (
                <div className= "ninja" key = {ninja.id }>
                    <div> { ninja.name } </div>
                    <div> {ninja.age } </div>
                    <div> {ninja.belt } </div>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        );
        //Instead of using {name}, we can use {this.props.name} if we don't want to destructure the property
    }
}

export default Ninjas;
