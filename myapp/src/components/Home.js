import React, { Component } from 'react'
import '../index.css'
//import axios from 'axios'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    // state = {
    //     post: [ ]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //      .then(res => {
    //          console.log(res)
    //          this.setState({
    //              post: res.data.slice(0,10)
    //          })
    //      })
    // }

    render(){
        console.log(this.props);
        //const { post } = this.state;
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map( posts => {
                return(
                    <div className = "post card" key={posts.id}>
                    <img src={ pokeball } alt = "Poke Ball Here"/>
                        <div className="card-content">
                          <Link to = {'/' + posts.id }> 
                            <span className="card-title red-text">{ posts.title } </span>
                          </Link>
                            <p>{posts.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No post yet </div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home)