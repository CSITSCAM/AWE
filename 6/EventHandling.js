//EventHandling.js

import {React, Component} from 'react';

class EventHandling extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            d: new Date()
        }

        //Binding display() method to class
        this.display=this.display.bind(this);
    }

    display() //normal method
    {
        document.getElementById("i1").innerHTML=this.state.d+" ";
    }

    message = () => {         //arrow function
        document.getElementById("i1").innerHTML="Good Bye!";
    }

    render()
    {
        return <>
                    <button onClick={this.display}>Button 1</button>
                    <button onClick={this.message}>Button 2</button>
                    <h2 id="i1"></h2>
                </>
    }
}
export default EventHandling;
