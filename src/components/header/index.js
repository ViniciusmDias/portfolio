import React, { useState } from "react"
import "./styles.css"
import { Link, useStaticQuery } from "gatsby"
import useDocumentScrollThrottled from "../useDocumentScrollThrottled/"
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
	const [movScroll, setMovScroll] = useState(false)
	const [movClick, setMovClick] = useState(false)
	const [hamburguer, setHamburguer] = useState(false)

	const MINIMUM_SCROLL = 80
	const TIMEOUT_DELAY = 400

	useDocumentScrollThrottled(callbackData => {
		const { previousScrollTop, currentScrollTop } = callbackData
		const isScrolledDown = previousScrollTop < currentScrollTop
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

		setTimeout(() => {
			setMovScroll(isScrolledDown && isMinimumScrolled)
		}, TIMEOUT_DELAY)
	})

	const moveStyle = movScroll ? "move" : ""
	const clickStyle = movClick ? "click" : ""

	function handleClick() {
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
			<header className={`header ${moveStyle} `}>
				<div className={`wrapper ${clickStyle}`}>
					<h2 className="logo">{data.site.siteMetadata.title}</h2>
					<ul className="menu">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="#projetos">Sobre</Link>
						</li>
						<li>
							<Link href="#servicos">Projetos</Link>
						</li>
						<li>
							<Link href="#contato">Contato</Link>
						</li>
					</ul>
					<div className="social-icons">
						<a href="">
							<FaGithub />
						</a>
						<a href="">
							<FaLinkedin />
						</a>
						<a href="">
							<FaInstagram />
						</a>
					</div>
					<button
						onClick={handleClick}
						className={`icon ${moveStyle} ${clickStyle}`}
					>
						<HamburgerMenu
							isOpen={hamburguer}
							width={25}
							height={16}
							strokeWidth={2}
							rotate={0}
							color="#fff"
							borderRadius={0}
							animationDuration={0.5}
						/>
					</button>
				</div>
				<div className={`aside ${clickStyle}`}>
					<div className="aside-menu">
						<Link to="/blog">Home</Link>
						<Link to="/blog">Tecnologias</Link>
						<Link to="/blog">Experiencia</Link>
						<Link to="/blog">Projetos</Link>
					</div>
					<div className="social-icons">
						<a href="">
							<FaGithub />
						</a>
						<a href="">
							<FaLinkedin />
						</a>
						<a href="">
							<FaInstagram />
						</a>
					</div>
				</div>
			</header>
		</>
	)
}
