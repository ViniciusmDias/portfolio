import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"
import { FaGithub, FaChrome } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function ProjetosSlick() {
	var settings = {
		accessibility: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		//prevArrow: <FaChevronLeft />,
		//nextArrow: <FaChevronRight />,
	}
	const data = useStaticQuery(graphql`
		query MyQuery {
			file(relativePath: { eq: "dpizza.png" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<div className="">
			<Slider {...settings}>
				<div className="carousel-item">
					<div className="info-item">
						<h4>DEVPIZZA.COM.BR</h4>
						<p>
							iOS and Android apps built with React Native for players to check
							out the Brazilian LoL Championship. It's been installed hundreds
							of thousands of times already.
						</p>
					</div>
					<div className="show-item">
						<div className="social">
							<h4>2020</h4>
							<div className="icons">
								<FaGithub />
								<FaChrome />
							</div>
						</div>
						<Img fluid={data.file.childImageSharp.fluid} alt="DevPizza Logo" />
						<h4>Site</h4>
					</div>
				</div>
				<div className="carousel-item">
					<div className="info-item">
						<h4>DEVPIZZA.COM.BR</h4>
						<p>
							iOS and Android apps built with React Native for players to check
							out the Brazilian LoL Championship. It's been installed hundreds
							of thousands of times already.
						</p>
					</div>
					<div className="show-item">
						<div className="social">
							<h4>2020</h4>
							<div className="icons">
								<FaGithub />
								<FaChrome />
							</div>
						</div>
						<Img fluid={data.file.childImageSharp.fluid} alt="DevPizza Logo" />
						<h4>Site</h4>
					</div>
				</div>
				<div className="carousel-item">
					<div className="info-item">
						<h4>DEVPIZZA.COM.BR</h4>
						<p>
							iOS and Android apps built with React Native for players to check
							out the Brazilian LoL Championship. It's been installed hundreds
							of thousands of times already.
						</p>
					</div>
					<div className="show-item">
						<div className="social">
							<h4>2020</h4>
							<div className="icons">
								<FaGithub />
								<FaChrome />
							</div>
						</div>
						<Img fluid={data.file.childImageSharp.fluid} alt="DevPizza Logo" />
						<h4>Site</h4>
					</div>
				</div>
			</Slider>
		</div>
	)
}
