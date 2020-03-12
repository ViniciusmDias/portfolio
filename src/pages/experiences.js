import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Experiences from "../components/experiences"

const ExperiencesPage = () => (
	<Layout>
		<SEO title="Experiences" />
		<Header />

		<Experiences />
	</Layout>
)

export default ExperiencesPage
