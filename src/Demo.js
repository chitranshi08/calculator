import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';



const Demo = (props) => {
 return	<div className="maindiv_style">
 						
							<h1> hello world {props.name}</h1>
							<p> welcome to my channel :) </p>
		</div>		

		}
export default Demo;