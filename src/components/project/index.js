import React from "react"
import "./styles.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
export default function Project() {
	const data = useStaticQuery(graphql`
		query projectQuery {
			allMdx(filter: { frontmatter: { tag: { eq: "projects" } } }) {
				edges {
					node {
						frontmatter {
							description
							title
							imgUrl {
								childImageSharp {
									fixed(width: 300, height: 170) {
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
	const projects = data.allMdx.edges
	return (
		<div className="project">
			{projects.map(project => (
				<div key={generateKey(project.node.frontmatter.title)} className="item">
					<div className="image-item">
						<Img
							fixed={project.node.frontmatter.imgUrl.childImageSharp.fixed}
							alt="Project icon"
						/>
					</div>
					<div className="info-item">
						<h3>{project.node.frontmatter.title}</h3>
						<p>{project.node.frontmatter.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}
