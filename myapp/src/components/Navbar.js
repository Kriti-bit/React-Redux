import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
//withRouter gives the props to Navbar which wouldn't have been present otherwise since it isn't a route like /home and about in App.js
const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // },2000)
    //Redirect to /about after 2000 milli seconds
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/#" className="brand-logo">poke time</a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)