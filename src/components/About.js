import React from 'react'
import Links from './Links'

function About(props) {
	return (
		<div id='about'>
			<h3>About Me</h3>
			{!props.bio || props.bio === '' ? null : <p>{props.bio}</p>}
			<img src='https://i.imgur.com/mV8PQxj.gif' alt='I made this' />
			<Links {...props.links} />
		</div>
	)
}

export default About