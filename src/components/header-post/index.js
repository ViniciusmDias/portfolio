import React from "react"
import "./styles.css"
import { Link, useStaticQuery, graphql } from "gatsby"

import { IoIosReturnLeft } from "react-icons/io"

export default function HeaderPost() {
	const data = useStaticQuery(graphql`
		query HeaderPostQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<header className="header">
				<div className="wrapper">
					<Link title="Go to home" to="/" className="logo">
						<h2>{data.site.siteMetadata.title}</h2>
					</Link>
					<Link title="Go to page case" to="/case" className="case">
						Case Studies
						<IoIosReturnLeft />
					</Link>
				</div>
			</header>
		</>
	)
}
