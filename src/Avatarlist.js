import React from 'react'

const Avatarlist = (props) => {
	return(

		<div className="AvatarStyle mg4 bg-red dib pa4">
						<img src="logo512.png" alt="Avatar" />
						<h1>{props.name}</h1>
						<p> {props.work} </p>


				</div>	



		)




}
export default Avatarlist;