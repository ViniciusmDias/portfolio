import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Button from "../components/button"
import Dashboard from "../components/dashboard"

import Img from "gatsby-image"

import "./projects.css"

const BlogIndex = ({ data }) => {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Projects" description="All projects in my carrer." />
			<Header />
			<div className="container works">
				<hr />
				<h1>Projects</h1>

				<h2>
					Some projects that I have contributed in some way and I'm very proud
					of.
				</h2>
				<section
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-easing="ease"
					data-sal-duration="1000"
				>
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug
						return (
							<article key={node.fields.slug}>
								<Link
									style={{ boxShadow: `none` }}
									title="go to project"
									to={node.fields.slug}
								>
									<div className="image">
										<Img
											fixed={node.frontmatter.imgUrl.childImageSharp.fixed}
											alt={`logo of ${node.frontmatter.title}`}
										/>
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
											{node.frontmatter.techs.split(", ").map(item => (
												<span>{item}</span>
											))}
										</div>
									</section>
								</Link>
							</article>
						)
					})}
				</section>
			</div>

			<Dashboard />
			<Button title="carrer" />
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
`
