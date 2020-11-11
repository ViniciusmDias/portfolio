import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./styles.css"
export default function Resume() {
	return (
		<div className="container resume">
			<h1>Resume</h1>

			<iframe
				height="100%"
				width="100%"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyDDVvLEMNs554CG6KmKKfQ%2FResume%3Fnode-id%3D13%253A19"
				allowfullscreen
			></iframe>
			<div className="social-icons">
				<a href="https://github.com/ViniciusmDias">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/vinicius-m-dias/">
					<FaLinkedin />
				</a>
				<a href="https://www.instagram.com/diasvini10/">
					<FaInstagram />
				</a>
			</div>
		</div>
	)
}
