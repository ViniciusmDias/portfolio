import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function Intro() {
	return (
		<>
			<div className="container intro">
				<h1>Hi, I'm Vinícius a Frontend Developer.</h1>
				<p>
					I have over 3 years experience developing websites and applications
					with HTML, CSS, JS and React.
				</p>
				<Link to="/technologies">
					Technologies
					<FaArrowRight />
				</Link>
			</div>
		</>
	)
}
