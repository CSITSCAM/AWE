//Car.js
import {React, Component} from 'react';

class Car extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name: "Ferrari",
            color: "red"
        }
    }
    render()
    {
        return <>
                    <h1>My {this.state.name}</h1>
                    <h2>It is {this.state.color} in color</h2>
                </>
    }
}

export default Car;
