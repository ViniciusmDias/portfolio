import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Techs from "../components/techs"

const TechnologiesPage = () => (
	<Layout>
		<SEO title="My Technologies" description="Things I know about" />
		<Header />

		<Techs />
	</Layout>
)

export default TechnologiesPage
