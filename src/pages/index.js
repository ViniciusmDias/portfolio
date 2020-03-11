import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Intro from "../components/intro"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />

		<Intro />
	</Layout>
)

export default IndexPage
