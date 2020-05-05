import React from "react"
import "./styles.css"

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
		<section
			className="content"
			data-sal="slide-up"
			data-sal-delay="200"
			data-sal-easing="ease"
			data-sal-duration="1000"
		>
			<div className="experience">
				{experiences.map(experience => (
					<div
						key={generateKey(experience.node.frontmatter.title)}
						className="item"
					>
						<div className="info-item">
							<div className="title">
								<h3>{experience.node.frontmatter.title}</h3>
							</div>
							<p className="description">
								{experience.node.frontmatter.description}
							</p>
							<div className="category">
								{experience.node.frontmatter.categories
									.split(", ")
									.map(item => (
										<p>{item}</p>
									))}
							</div>
						</div>
						<div className="timeline">
							<ul>
								<li>
									<span>{experience.node.frontmatter.year}</span>
								</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
