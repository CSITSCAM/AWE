//Loading an image

//Load.js



import {React, Component} from 'react';

class LoadImage extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            source:"tom.png"
        }
    }
    load=()=>
    {
        this.setState({source: "jerry.png"})
    }
    render()
    {
        return <>
                    <button onClick={this.load}>Click to Load Image</button>
                    <img src={this.state.source}/>
                </>
    }
}

export default LoadImage;

