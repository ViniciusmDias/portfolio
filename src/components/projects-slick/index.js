import React from "react"
import Slider from "react-slick"
import NextArrowSlider from "../nextArrowSlider"
import PrevArrowSlider from "../prevArrowSlider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"
import { FaGithub, FaChrome } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProjetosSlick() {
	function SampleNextArrow(props) {
		const { onClick } = props
		return <NextArrowSlider actionClick={onClick} />
	}

	function SamplePrevArrow(props) {
		const { onClick } = props
		return <PrevArrowSlider actionClick={onClick} />
	}
	var settings = {
		accessibility: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
	}

	const data = useStaticQuery(graphql`
		query ProjectQuery {
			allMdx(filter: { frontmatter: { tag: { eq: "project" } } }) {
				edges {
					node {
						frontmatter {
							description
							title
							live
							github
							imgUrl {
								childImageSharp {
									fixed {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const projects = data.allMdx.edges

	return (
		<div className="">
			<Slider {...settings}>
				{projects.map((project, i) => (
					<div key={i} className="carousel-item">
						<div className="info-item">
							<h4>{project.node.frontmatter.title}</h4>
							<p>{project.node.frontmatter.description}</p>
						</div>
						<div className="show-item">
							<div className="social">
								<h4>2020</h4>
								<div className="icons">
									<a href={`${project.node.frontmatter.github}`}>
										<FaGithub />
									</a>
									<a href={`${project.node.frontmatter.live}`}>
										<FaChrome />
									</a>
								</div>
							</div>
							<Img
								fixed={project.node.frontmatter.imgUrl.childImageSharp.fixed}
								alt="A logo"
							/>
							<h4>Site</h4>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}
