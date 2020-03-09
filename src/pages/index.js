import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Intro from "../components/intro"
import Sobre from "../components/sobre"
import Projetos from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header />

		<Intro></Intro>
		<Sobre />
		<Projetos />
		<Contact />
	</Layout>
)

export default IndexPage
