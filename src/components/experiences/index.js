import React from "react"
import Experience from "../experience"
import Button from "../button"
import "./styles.css"
export default function Experiences() {
	return (
		<div className="container experiences">
			<h1>Experiences.</h1>
			<Experience />
			<Button title="projects" />
		</div>
	)
}
