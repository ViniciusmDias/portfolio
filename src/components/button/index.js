import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function Button({ title, key }) {
	return (
		<>
			<Link class="button" to={key}>
				{title}
				<FaArrowRight />
			</Link>
		</>
	)
}
