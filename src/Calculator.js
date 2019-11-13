import React from 'react';
import ReactDOM from "react-dom";
import './Calculator.css'


export class Calculator extends React.Component{
constructor (props){
	super(props);
	this.state ={
		input1:"",
		input2:"",
		input3:"",
		input4:"",
		input5:"",
		input6:"",
		input7:"",
		input8:"",
		result1:"",
		result2:"",
		result3:"",
		result4:""
	}

	
}
handlekeydown1 = (e) => {
	this.setState({
			input1 : Number(e.target.value)
	})
	console.log(e.target.value)
}
handlekeydown2 = (e) => {
	this.setState({
			input2 :Number(e.target.value)
	})
}
addEvent = () => {
	this.setState({
			result1: this.state.input1 + this.state.input2
	})
}

handlekeydown3 = (e) => {
	this.setState({
			input3 : Number(e.target.value)
	})
	console.log(e.target.value)
}
handlekeydown4 = (e) => {
	this.setState({
			input4 :Number(e.target.value)
	})
}
minusEvent = () => {
	this.setState({
			result2: this.state.input3 - this.state.input4
	})
}


handleKeyDown5 = (e) => {
	this.setState({
			input5 : Number(e.target.value)
	})
	console.log(e.target.value)
}
handleKeyDown6 = (e) => {
	this.setState({
			input6 :Number(e.target.value)
	})
}
multiplyEvent = () => {
	this.setState({
			result3: this.state.input5 * this.state.input6
	})
}


handleKeyDown7 = (e) => {
	this.setState({
			input7 : Number(e.target.value)
	})
	console.log(e.target.value)
}
handleKeyDown8 = (e) => {
	this.setState({
			input8 :Number(e.target.value)
	})
}
divideEvent = () => {
	this.setState({
			result4: this.state.input7 / this.state.input8
	})
}

render(){
	return(
	<div className="container">
	<div className="calculatorContainer">
	<h1>Calculator</h1>
	<div>
	<div>
	<input name="1" type="text" onKeyUp={this.handleKeyDown1}/>
	<span>+</span>
	<input name="2" type="text" onKeyUp={this.handleKeyDown2}/>
	<button onClick={this.addEvent}>=</button>
	<span>{this.state.result1}</span>
	</div>

	<div>
	<input name="3" type="text" onKeyUp={this.handleKeyDown3}/>
	<span>-</span>
	<input name="4"type="text" onKeyUp={this.handleKeyDown4}/>
	<button onClick={this.minusEvent}>=</button>
	<span>{this.state.result2}</span>
	</div>
	
	<div>
	<input name="5"type="text" onKeyUp={this.handleKeyDown5} />
	<span>*</span>
	<input name="6" type="text" onKeyUp={this.handleKeyDown6}/>
	<button onClick={this.multiplyEvent}>=</button>
	<span>{this.state.result3}</span>
	</div>


	<div>
	<input name="7" type="text" onKeyUp={this.handleKeyDown7}/>
	<span>/</span>
	<input name="8" type="text" onKeyUp={this.handleKeyDown8}/>
	<button onClick={this.divideEvent}>=</button>
	<span>{this.state.result4}</span>
	</div>

	</div>
</div>

</div>
)
}
}
export default Calculator;