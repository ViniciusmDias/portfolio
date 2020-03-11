import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"

export default function Intro() {
	return (
		<>
			<div className="container intro">
				<h1>Olá, me chamo Vinícius, sou Desenvolvedor Web.</h1>
				<p>
					Eu tenho 3 anos de experiência desenvolvendo sites e aplicações com
					Html, Css, Javascript e React.
				</p>
				<a>
					Tecnologias
					<FaArrowRight />
				</a>
			</div>
		</>
	)
}
