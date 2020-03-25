import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Projects from "../components/projects"

const ProjectsPage = () => (
	<Layout>
		<SEO title="My Projects" description="All that I've had contributed" />
		<Header />

		<Projects />
	</Layout>
)

export default ProjectsPage
