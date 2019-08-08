import React, { Component } from 'react'

export const Book = ({title,author,pages, freeBookMark}) => {

	return (
			<section>
				<h2> title : {title} </h2>

				<p> by : {author} </p>

				<p> PAges : {pages} </p>
				<p> freeBookMark today : {freeBookMark ? 'yes!' : 'no'} </p>

			</section>
		)
}