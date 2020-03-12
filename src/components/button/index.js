import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function Button({ title }) {
	return (
		<>
			<Link class="button" to={`/${title}`}>
				{title}
				<FaArrowRight />
			</Link>
		</>
	)
}
