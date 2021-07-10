import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'green', 'blue', 'yellow', 'violet','orange'];
    const randomColours = colours[Math.floor(Math.random()*5)];
    const className = randomColours + '-text'; //Concatenate randomColours with -text to get the class

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow