/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./styles.css"
import "minireset.css"

export default function Layout({ children }) {
	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	}

	return (
		<>
			<main className="layout">{children}</main>
			<footer>© {new Date().getFullYear()}, Desenvolvido em Gatsby</footer>
		</>
	)
}
