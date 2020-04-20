import React from "react"
import "./styles.css"
import Button from "../button"

export default function Intro() {
	return (
		<>
			<div className="container intro">
				<h1>I'm a developer of sites and aplications.</h1>
				<div className="background" />
				<div className="description">
					<h3>
						I have over 3 years experience developing websites and applications
						with HTML, CSS, JS and React.
					</h3>
					<Button title="technologies" />
				</div>
			</div>
		</>
	)
}
