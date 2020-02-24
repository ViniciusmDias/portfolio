import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"

import Intro from "../components/intro"
import Projetos from "../components/projects"
import Services from "../components/services"
import Techs from "../components/techs"
import Contact from "../components/contact"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro title="Intro"></Intro>
		<Projetos />
		<Services />
		<Techs />
		<Contact />
	</Layout>
)

export default IndexPage
