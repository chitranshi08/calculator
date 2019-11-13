import React from 'react'
import './Avatar.css';
import Avatarlist from './Avatarlist';
import tachyons from 'tachyons'
class Avatar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			avatarVisible:true,
			heading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum similique, praesentium reprehenderit quibusdam, recusandae perferendis consequatur minus, et voluptate voluptatibus dolores distinctio deleniti eaque totam excepturi velit id est ducimus!"				
		}
		this.toggle = this.toggle.bind(this);	
	}
	toggle(){
		const avatarVisible = this.state.avatarVisible
		console.log(this.state)
		this.setState({avatarVisible:!avatarVisible})
	}
	render(){
		const Avatarlistarray = [


			{
				id:1,
				name:"charu",
				work:"web developer"


			},
			{
				id:2,
				name:"vinod",
				work:"web developer"



			},

			{

				id:3,
				name:"rimmu",
				work:"web developer"

			},
			{

				id:4,
				name:"visnu",
				work:"web developer"


			},
			{
				id:5,
				name:"kisan",
				work:"farming"
			}






]

		return( 
				<div>	
						{
							this.state.avatarVisible ? 
						(
							<div>
							<div>{this.state.heading}</div>
							<h1>{this.state.avatarVisible}</h1>
							<h1> welcome to channel </h1>
						
						{
							Avatarlistarray.map((item)=>
							<Avatarlist id={item.id} name={item.name} work={item.work}/>
							)
						}
						
						</div>
						) 
					:
					(
						<div>avatar is not visible</div>
					)
						}
						<button onClick={this.toggle}> suscribe </button>
						
				</div>	
			)

	}

}
export default Avatar;