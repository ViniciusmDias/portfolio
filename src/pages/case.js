import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Header from "../components/header"
import Button from "../components/button"
import Img from "gatsby-image"
import Image from "../images/projects/covid-logo.png"

import "./blog.css"
const BlogIndex = ({ data }) => {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Projects" description="All projects in my carrer." />
			<Header />
			<div className="container cases">
				<hr />
				<h1>Case Studies</h1>
				<h2>
					Some projects that I have contributed in some way and I'm very proud
					of.
				</h2>
				<section>
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug
						return (
							<article key={node.fields.slug}>
								<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
									<div className="image">
										<img src={Image} alt="logo project" />
									</div>
									<section className="about">
										<small>{node.frontmatter.date}</small>
										<h3
											style={{
												marginBottom: rhythm(1 / 4),
											}}
										>
											{title}
										</h3>
										<p
											dangerouslySetInnerHTML={{
												__html: node.frontmatter.description || node.excerpt,
											}}
										/>
										<div className="techs">
											<span>{node.frontmatter.techs}</span>
										</div>
									</section>
								</Link>
							</article>
						)
					})}
				</section>
			</div>
			<Button title="experiences" />
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						techs
						imgUrl
					}
				}
			}
		}
	}
`
