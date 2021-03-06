import React, { useState } from "react"
import "./styles.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import PropTypes from "prop-types"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Header() {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [movClick, setMovClick] = useState(false)
	const [hamburguer, setHamburguer] = useState(false)

	const clickStyle = movClick ? "click" : ""

	function handleClick() {
		document.documentElement.style.overflow = movClick ? "initial" : "hidden"

		setHamburguer(!hamburguer)
		setMovClick(!movClick)
	}
	Header.propTypes = {
		siteTitle: PropTypes.string,
	}

	Header.defaultProps = {
		siteTitle: ``,
	}

	return (
		<>
			<header className="header">
				<div className={`wrapper ${clickStyle}`}>
					<Link to="/" title="Go to hometitle" className={`logo ${clickStyle}`}>
						<h2>{data.site.siteMetadata.title}</h2>
					</Link>
					<ul className="menu">
						<li>
							<Link title="Go to home page" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link title="Go to case studies page" to="/projects">
								Projects
							</Link>
						</li>
						<li>
							<Link title="Go to experiences page" to="/carrer">
								Carrer
							</Link>
						</li>
						<li>
							<Link title="Go to resume page" to="/resume">
								Resume
							</Link>
						</li>
						{/* <li>
							<Link title="Go to contact page" to="/contact">
								Contact
							</Link>
						</li> */}
					</ul>
					<div className="social-icons">
						<a
							title="Go to vinicius dias github"
							href="https://github.com/ViniciusmDias"
						>
							<FaGithub />
						</a>
						<a
							title="Go to vinicius dias linkedin"
							href="https://www.linkedin.com/in/vinicius-m-dias/"
						>
							<FaLinkedin />
						</a>
						<a
							title="Go to vinicius dias instagram"
							href="https://www.instagram.com/diasvini10/"
						>
							<FaInstagram />
						</a>
					</div>
					<button onClick={handleClick} className={`icon ${clickStyle}`}>
						<HamburgerMenu
							isOpen={hamburguer}
							width={25}
							height={16}
							strokeWidth={2}
							rotate={0}
							color="var(--near-black)"
							borderRadius={0}
							animationDuration={0.5}
							menuClicked={handleClick}
						/>
					</button>
				</div>
				<div className={`aside ${clickStyle}`}>
					<div className="aside-menu">
						<Link title="Go to homepage" to="/">
							Home
						</Link>
						<Link title="Go to case studies page" to="/projects">
							Projects
						</Link>
						<Link title="Go to experience page" to="/carrer">
							Experience
						</Link>
						<a
							title="Go to resume page"
							href="https://pdfhost.io/v/msVERCoH8_ResumeENpdf.pdf"
						>
							Resume
						</a>
					</div>
					<div className="social-icons">
						<a
							title="Go to vinicius dias github"
							href="https://github.com/ViniciusmDias"
						>
							<FaGithub />
						</a>
						<a
							title="Go to vinicius dias linkedin"
							href="https://www.linkedin.com/in/vinicius-m-dias/"
						>
							<FaLinkedin />
						</a>
						<a
							title="Go to vinicius dias instagram"
							href="https://www.instagram.com/diasvini10/"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
			</header>
		</>
	)
}
