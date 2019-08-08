import React, { Component } from 'react'
import {render} from 'react-dom'
import Library from './Library'
/*var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}*/


/*const title = React.createElement(
    'ul',
    {id: 'title', className: 'header', style: style},
    React.createElement(
    	'li',
    	{},
    	'item on our list'


    	)
)*/

/*let skiData = {

	total : 50,
	powder : 20,
	backcountry: 10,
	goal: 100,
}

const getPercent = decimal => {
			return decimal * 100 + '%'
	}

const	calcGoalProgress = (total, goal) => {

		return getPercent(total/goal)
	}

const SkiDayCounter = (props) => {
	return (
		<section>
			 	<div>
			 		<p> Total Days: {props.total} </p>
			 	</div>
			 	<div>
			 		<p> Powder Days: {props.powder} </p>
			 	</div>
			 	<div>
			 		<p> backcountry Days: {props.backcountry} </p>
			 	</div>
			 	<div>
			 		<p> Goal: {calcGoalProgress(props.total,props.goal)}</p>
			 	</div>
		</section>
		)
} */
/*class SkiDayCounter extends Component{
	//making methods inside a class
	

	render(){
		return(
			
			)

	}
}*/
/*class Message extends React.Component{
	render(){
		//console.log(this.props)
		return (

			<div>
				<h1 style = {{color: this.props.color}}> hiiiii {this.props.msg}</h1>
				<p> ill be {this.props.age} years old this year </p>
 			</div>
			)
	}

}*/








//////////////////////////////////////////////////////////


let booksList = [
	{"title" : "Sun rises" , "author": "ernest" ,"pages": 300},
	{"title" : "Sum of all fears" , "author": "clancy", "pages" :400},
	{"title" : "Heart of Darkness" , "author": "Conrad" ,"pages": 300},
	{"title" : "Bob the builder" , "author": "Bob" ,"pages": 300},
]






/*class FavouriteColourForm extends React.Component{
	state = {

		value : ''}
		

	newColor = e =>
		this.setState({value : e.target.value})
	

	submit = e =>{
		console.log('New color : ${this.state.value} ' )

		e.preventDefault()
	} 

	render(){
		return(
			<form onSubmit = {this.submit}>
				<label> Favourite Colour:
					<input 
						type= "color"
						onChange = {this.newColor} />

				</label>

				<button> Submit </button>
				</form>
			)
	}
}*/
render(
	
		<Library books={booksList}/>
		//<FavouriteColourForm/>
	,
    document.getElementById('root')
)