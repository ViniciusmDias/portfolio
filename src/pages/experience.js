import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Experience from "../components/experience"

const ExperiencePage = () => (
	<Layout>
		<SEO title="Experience" />
		<Header />

		<Experience />
	</Layout>
)

export default ExperiencePage
