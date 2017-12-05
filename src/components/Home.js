import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';
import axios from "axios";

// import axios

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    componentWillMount(){
        let promise=axios.get("/api/featured")

        promise.then(res=>{
            console.log(res);
            this.setState({
                featured: res.data,
                posts: res.data,
                index: (~~(Math.random() * res.data.length) + 0)   //I change this from "results to res.data.length"
            })
        }).catch(console.log())
    }
    

    render(){
        // map over your recommended blogs here, replace null.
        const posts = this.state.posts.map((blog,i)=>{

            <BlogThumb key={i}>{blog}</BlogThumb>

        })



        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;