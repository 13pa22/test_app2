import React, { Component } from 'react'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component { //root component

	static defaultProps = {
		books : [
			{"title" : "no title provided" , "author" : "N/a","pages" : 0}

		]
	}


	state = {
		freeBookMark: true,
		open : true,
		hiring : false,
		data : [],
		loading : false
	}
	
	componentDidMount(){
		console.log("component is now mounted")
		this.setState({loading : true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data,loading : false}))
	}

	componentDidUpdate(){
		console.log("component updated")
	}

	toggleOpenClosed = () => {

		this.setState(prevState => ({open : !this.state.open}))
	}

	render(){
		
		const { books } = this.props


		return(
		<div>
				{this.state.hiring ? <Hiring /> : <NotHiring />}
				{this.state.loading 
					? "loading....."
					: <div>
						{
							this.state.data.map(product => {
								return(
									<div  key = {product.id}>
										<h3> Library product of week </h3>
										<h4> {product.name} </h4>
										<img alt = {product.name} src = {product.image} height ={100} />
									</div>
									)
							})
						}




		</div>}
				<h1> The library is {this.state.open ? 'open' : 'closed'}</h1>
		 		<button onClick ={this.toggleOpenClosed}> Change state </button>

		 		{books.map(

		 				(book,i)=>
		 				
		 				<Book key= {i}
		 				title={book.title} 			  
		 				author = {book.author} 
		 				pages = {book.pages} 
		 				freeBookMark = {this.state.freeBookMark}
		 				/>
		 			

		 		)}

		</div>

		)
	}
	
}


export default Library