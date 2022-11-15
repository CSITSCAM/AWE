//Update.js



import {React, Component} from 'react';

class Update extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            score: 0
        }
        console.log("Inside Constructor");
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("Inside GetDerivedStateFromProps");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("Inside GetSnapshotBeforeUpdate");
        console.log("Before update score: "+prevState.score);
        return null;
    }

    componentDidUpdate()
    {
        console.log("Inside ComponentDidUpdate");
        console.log("After update score: "+this.state.score);
    }

    change = () => {
        let s=this.state.score;
        this.setState({score: s+100});
    }

    render()
    {
        console.log("Inside render");
        return <>
                    <h1>Score value: {this.state.score}</h1>
                    <button onClick={this.change}>Take a shot</button>
                </>
    }
}
export default Update;
