import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"
import HeaderPost from "../components/header-post"
import Img from "gatsby-image"
import "./styles.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<HeaderPost />
			<article className="single-post">
				<div className="header">
					<Img
						fixed={post.frontmatter.imgUrl.childImageSharp.fixed}
						alt={`logo of ${post.frontmatter.title}`}
					/>
					<h1
						style={{
							marginTop: rhythm(1),
							marginBottom: 0,
						}}
					>
						{post.frontmatter.title}
					</h1>
					<h2>{post.frontmatter.description}</h2>
					<strong>Tags</strong>
					<h3>{post.frontmatter.techs}</h3>
					<strong>Date</strong>
					<p
						style={{
							...scale(-1 / 5),
							display: `block`,
							marginBottom: rhythm(1),
						}}
					>
						{post.frontmatter.date}
					</p>
				</div>
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr
					style={{
						marginBottom: rhythm(1),
					}}
				/>
				<footer>
					<Bio />
				</footer>
			</article>

			<nav>
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				imgUrl {
					childImageSharp {
						fixed {
							...GatsbyImageSharpFixed
						}
					}
				}
				techs
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`
