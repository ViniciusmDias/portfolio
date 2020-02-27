import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"

import Intro from "../components/intro"
import Sobre from "../components/sobre"
import Projetos from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro title="Intro"></Intro>
		<Sobre />
		<Projetos />
		<Contact />
	</Layout>
)

export default IndexPage
