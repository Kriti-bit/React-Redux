import React from 'react';

const Ninjas = ({ninjas}) => {
        //console.log(this.props)
        //Destructuring the props
        //const { name , age , belt } = this.props;


        // const ninjaList = ninjas.map(ninja =>{
        //     if(ninja.age>20){
        //     return (
        //         <div className= "ninja" key = {ninja.id }>
        //             <div> { ninja.name } </div>
        //             <div> {ninja.age } </div>
        //             <div> {ninja.belt } </div>
        //         </div>
        //     )
        //     } else {
        //         return null;
        //     }
        // })

        // const ninjaList = ninjas.map(ninja => {
        //     return ninja.age > 20 ? (
        //         <div className= "ninja" key = {ninja.id }>
        //             <div> { ninja.name } </div>
        //             <div> {ninja.age } </div>
        //             <div> {ninja.belt } </div>
        //         </div>
        //     ) : null;
        // })
        // Instead of returning ninjaList below, we can simply return the ternary operator

        return(
            <div className="ninja-list">
                {        
                ninjas.map(ninja => {
                        return ninja.age > 20 ? (
                            <div className= "ninja" key = {ninja.id }>
                                <div> { ninja.name } </div>
                                <div> {ninja.age } </div>
                                <div> {ninja.belt } </div>
                            </div>
                        ) : null;
                    }) 
                }
            </div>
        );
        //Instead of using {name}, we can use {this.props.name} if we don't want to destructure the property
    
}

export default Ninjas;
