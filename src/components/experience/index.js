import React from "react"
import "./styles.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
export default function Experience() {
	const data = useStaticQuery(graphql`
		query experienceQuery {
			allMdx(
				filter: { frontmatter: { tag: { eq: "experiences" } } }
				sort: { fields: [frontmatter___order], order: ASC }
			) {
				edges {
					node {
						frontmatter {
							description
							title
							year
							categories
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
	const experiences = data.allMdx.edges
	return (
		<div className="experience">
			{experiences.map(experience => (
				<div
					key={generateKey(experience.node.frontmatter.title)}
					className="item"
				>
					<div className="image-item">
						<Img
							fixed={experience.node.frontmatter.imgUrl.childImageSharp.fixed}
							alt="Experience icon"
						/>
					</div>
					<div className="info-item">
						<div className="title">
							<h3>{experience.node.frontmatter.title}</h3>
							<p className="category">{experience.node.frontmatter.year}</p>
						</div>
						<p className="description">
							{experience.node.frontmatter.description}
						</p>
						<p className="category">{experience.node.frontmatter.categories}</p>
					</div>
				</div>
			))}
		</div>
	)
}
