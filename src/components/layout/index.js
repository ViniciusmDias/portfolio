/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"

import Header from "../header"
import "./styles.css"
import "minireset.css"

export default function Layout({ children }) {
	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	}
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main className="layout">
				<Particles
					params={{
						particles: {
							number: {
								value: 200,
								density: {
									enable: true,
									value_area: 5000,
								},
							},
						},
					}}
				/>
				{children}
			</main>
			<footer>
				© {new Date().getFullYear()}, Desenvolvido com
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</>
	)
}
