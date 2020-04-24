import React from "react"
import Project from "../project"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./styles.css"
export default function Projects() {
	return (
		<div className="container projects">
			<h1>Projects.</h1>
			<Project />
			<div className="social-icons">
				<a
					title="Go to vinicius dias github"
					href="https://github.com/ViniciusmDias"
				>
					<FaGithub />
				</a>
				<a
					title="Go to vinicius dias linkedin"
					href="https://www.linkedin.com/in/vinicius-m-dias/"
				>
					<FaLinkedin />
				</a>
				<a
					title="Go to vinicius dias instagram"
					href="https://www.instagram.com/diasvini10/"
				>
					<FaInstagram />
				</a>
			</div>
		</div>
	)
}
