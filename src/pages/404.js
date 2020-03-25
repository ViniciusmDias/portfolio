import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" description="This page don't exist" />
		<h1>NOT FOUND</h1>
		<h2>Some pages that help you</h2>
		<ul className="menu">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/technologies">Technologies</Link>
			</li>
			<li>
				<Link to="/experiences">Experiences</Link>
			</li>
			<li>
				<Link to="/projects">Projects</Link>
			</li>
		</ul>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
)

export default NotFoundPage
