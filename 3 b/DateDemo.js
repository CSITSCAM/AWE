/DateDemo.js

import {React, Component} from 'react';

class DateDemo extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            d:new Date()
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({d: new Date()})
        }, 1000)
    }
    render()
    {
        return <>
                    <h1>Today's Date: {this.state.d.toLocaleDateString()}</h1>
                    <h1>Time: {this.state.d.toLocaleTimeString()}</h1>
                </>
    }
}

export default DateDemo;
