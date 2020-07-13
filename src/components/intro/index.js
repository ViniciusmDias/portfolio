import React from "react"
import "./styles.css"
import Button from "../button"
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"

export default function Intro() {
	return (
		<>
			<SocialProfileJsonLd
				type="Person"
				name="Vinicius Dias "
				url="https://viniciusdias.works/"
				sameAs={[
					"https://www.facebook.com/diasvini",
					"https://instagram.com/diasvini10",
					"https://www.linkedin.com/in/vinicius-m-dias/",
					"https://twitter.com/vinimdias10",
				]}
			/>
			<div className="container intro">
				<h1>I'm a very curious guy.</h1>
				<div className="background" />
				<div className="description">
					<h3>
						I am a Front-End developer with focus on performance and UX. I'm
						always learning different things and I consider myself a very
						curious guy. I feel that it keeps me motivated and creative to solve
						problems.
					</h3>
					<Button title="projects" />
				</div>
			</div>
		</>
	)
}
