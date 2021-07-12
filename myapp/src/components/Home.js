import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
class Home extends Component {
    state = {
        post: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
         .then(res => {
             console.log(res)
             this.setState({
                 post: res.data.slice(0,10)
             })
         })
    }

    render(){
        const { post } = this.state;
        const postList = post.length ? (
            post.map( post => {
                return(
                    <div className = "post card" key={post.id}>
                    <img src={ pokeball } alt = "Poke Ball Here"/>
                        <div className="card-content">
                          <Link to = {'/' + post.id }> 
                            <span className="card-title red-text">{ post.title } </span>
                          </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No post yet </div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home