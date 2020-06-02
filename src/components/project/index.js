import React from "react"
import "./styles.css"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"

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
							categories
							github
							live
							imgUrl {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
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
							fluid={project.node.frontmatter.imgUrl.childImageSharp.fluid}
							alt="Project image"
						/>
					</div>
					<div className="info-item">
						<h3>{project.node.frontmatter.title}</h3>
						<p className="description">
							{project.node.frontmatter.description}
						</p>
						<p className="category">{project.node.frontmatter.categories}</p>
						<div className="live">
							<a href={project.node.frontmatter.github}>
								View on Github <FaGithub />
							</a>
							<a href={project.node.frontmatter.live}>View on Web</a>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
