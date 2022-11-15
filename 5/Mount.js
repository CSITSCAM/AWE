//Mount.js

import {React, Component} from 'react';

class Mount extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            favcolor: "red"
        }
        console.log("Inside Constructor");
    }

    componentDidMount()
    {
        console.log("Inside ComponentDidMount");
        setTimeout(
            () => {this.setState({favcolor: "Green"})}, 2000);
    }

    render()
    {
        console.log("Inside render");
        return <>
                    <h1 style={{backgroundColor: this.state.favcolor}}>My Favorite Color is: {this.state.favcolor}</h1>
                </>
    }
}
export default Mount;
