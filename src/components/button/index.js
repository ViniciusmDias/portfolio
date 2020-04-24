import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function Button({ title }) {
	const route = title.split(" ")

	return (
		<>
			<Link class="button" title={`Go to ${title}`} to={`/${route[0]}`}>
				{title}
				<FaArrowRight />
			</Link>
		</>
	)
}
