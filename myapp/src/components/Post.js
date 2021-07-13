import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAction'
//import axios from 'axios'

class Post extends Component {
    // state = {
    //     post : null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //      .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res)
    //     })
    //     this.setState({
    //         id : id
    //     })
    // }
    //Here we've used props instead of state.

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render(){
        const post = this.props.post ? (
            <div className= "post">
                <h4 className="center">
                    {this.props.post.title}
                </h4>
                <p>{ this.props.post.body} </p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className = "center"> Loading Post ... </div>
        )
        return (
            <div className = "container">
                { post }
                <h4> {this.props.id} </h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id) //Same as post : state.posts.find((post) => { return post.id === id})
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)