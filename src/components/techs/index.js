import React from "react"
import Tech from "../tech"
import Button from "../button"
import "./styles.css"
export default function Techs() {
	return (
		<div className="container techs">
			<h1>Technologies.</h1>
			<Tech />
			<Button title="experiences" />
		</div>
	)
}
