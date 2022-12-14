//Calculator.js

import {React, Component} from 'react';
import './Calc.css';

class Calculator extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            answer: 0,
            question: ''
        };
        this.compute=this.compute.bind(this);
    }

    compute(event)
    {
        const val=event.target.value;
        var res=0;
        switch(val)
        {
            case "=": {
                if(this.state.question!=' ')
                {
                    try
                    {
                        res=eval(this.state.question);
                        this.setState({answer: res, question: ' '});
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math error", question: ' '});
                    }
                }
                break;
            }
            
            case 'clear': {
                this.setState({answer: 0, question: ' '});
                break;
            }

            case 'ans': {
                this.setState({question: this.state.question});
                break;
            }

            default: {
                this.setState({question: this.state.question += val});
                break;
            }
        }
    }
    render()
    {
        return <>
                    <div className='container'>
                        <input type="text" name="output" value={this.state.answer} readOnly/>
                        <input type="text" name="input" value={this.state.question} readOnly/>
                        <div>
                            <button value="clear" onClick={this.compute}> Clear </button>
                            <button value="=" onClick={this.compute}> = </button>
                            <button value="ans" onClick={this.compute}> Answer </button>
                        </div>
                        <div>
                            <button value="1" onClick={this.compute}> 1 </button>
                            <button value="2" onClick={this.compute}> 2 </button>
                            <button value="3" onClick={this.compute}> 3 </button>
                        </div>
                        <div>
                            <button value="4" onClick={this.compute}> 4 </button>
                            <button value="5" onClick={this.compute}> 5 </button>
                            <button value="6" onClick={this.compute}> 6 </button>
                        </div>
                        <div>
                            <button value="7" onClick={this.compute}> 7 </button>
                            <button value="8" onClick={this.compute}> 8 </button>
                            <button value="9" onClick={this.compute}> 9 </button>
                        </div>
                        <div>
                            <button value="0" onClick={this.compute}> 0 </button>
                            <button value="+" onClick={this.compute}> + </button>
                            <button value="-" onClick={this.compute}> - </button>
                        </div>
                        <div>
                            <button value="*" onClick={this.compute}> * </button>
                            <button value="/" onClick={this.compute}> / </button>
                            <button value="%" onClick={this.compute}> % </button>
                        </div>
                    </div>
                </>
    }
}
export default Calculator;
