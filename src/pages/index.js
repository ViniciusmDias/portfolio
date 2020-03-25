import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Intro from "../components/intro"

const IndexPage = () => (
	<Layout>
		<SEO
			title="Frontend Developer"
			description="I actually builds WebSites, E-Commerces and Applications."
		/>
		<Header />

		<Intro />
	</Layout>
)

export default IndexPage
