//Simple Property

//Greet.js

import {React, Component} from 'react';



class Greet extends Component
{
    render()
    {
        return <>
                    <h1>Hello {this.props.name}</h1>
                    <h1>This is a Class Component</h1>
                </>
    }
}

export default Greet;