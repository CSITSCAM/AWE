//Complex Property

//Greet.js



import {React, Component} from 'react';



class Greet extends Component
{
    render()
    {
        return <>
                    <h1>Name: {this.props.data.name}</h1>
                    <h1>Branch: {this.props.data.branch}</h1>
                </>
    }
}

export default Greet;



