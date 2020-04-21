import React from "react"
import Experience from "../experience"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./styles.css"
export default function Experiences() {
	return (
		<div className="container experiences">
			<h1>Experiences.</h1>
			<Experience />
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
