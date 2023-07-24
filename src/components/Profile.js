

import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
        super(props)
            this.state = {
                name: 'John',
                count:0,
                data: {}
            }
        // console.log("Constructing Profile");
        // console.log(this.props);    
    }

    async componentDidMount(){
        // this.timer = setInterval(() => {
        //     console.log("Hello World");
        // }, 1000);
        // const data = await fetch("https://api.github.com/users/vishnu-mouli-102408");
        // const json = await data.json();
        // this.setState({
        //     data: json
        // })
        // console.log(json);
        // console.log("Component mounted");
    }

    componentDidUpdate(){
        // console.log("Component updated");
    }
    
    componentWillUnmount(){
        // clearInterval(this.timer)
        // console.log("Component destroyed");
    }

  render() {
    // console.log("render");
    return (
      <div>
        <h1>This is Profile Class component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.state.name}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.data.name}</h2>
        <h2>{this.state.data.locarion}</h2>
        <h2>{this.state.data.bio}</h2>
        <img src={this.state.data.avatar_url} />
        <button onClick={()=> this.setState({
            name: 'Jane',
            count:1
        })}>Click</button>
      </div>
    )
  }
}

