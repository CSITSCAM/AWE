//Updating State using setState()

//Increment.js



import {React, Component} from 'react';

class Increment extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            clicks:0
        }
    }
    change=()=>
    {
        let c=this.state.clicks;
        this.setState({clicks:c+1});
    }
    render()
    {
        return <>
                    <button onClick={this.change}>Increment Counter</button>
                    <h1>Counter: {this.state.clicks}</h1>
                </>
    }
}

export default Increment;
