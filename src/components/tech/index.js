import React from "react"
import "./styles.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
export default function Tech() {
	const data = useStaticQuery(graphql`
		query techQuery {
			allMdx(filter: { frontmatter: { tag: { eq: "techs" } } }) {
				edges {
					node {
						frontmatter {
							description
							title
							imgUrl {
								childImageSharp {
									fixed {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const generateKey = pre => {
		return `${pre}_${new Date().getTime()}`
	}
	const techs = data.allMdx.edges
	return (
		<div className="tech">
			{techs.map(tech => (
				<div key={generateKey(tech.node.frontmatter.title)} className="item">
					<div className="image-item">
						<Img
							fixed={tech.node.frontmatter.imgUrl.childImageSharp.fixed}
							alt="Tech icon"
						/>
					</div>
					<div className="info-item">
						<h3>{tech.node.frontmatter.title}.</h3>
						<p>{tech.node.frontmatter.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}
