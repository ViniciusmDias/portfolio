import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./styles.css"
import { FaGithub } from "react-icons/fa"
import useDocumentScrollThrottled from "../useDocumentScrollThrottled/"

export default function Header({ siteTitle }) {
	const [movScroll, setMovScroll] = useState(false)

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

	Header.propTypes = {
		siteTitle: PropTypes.string,
	}

	Header.defaultProps = {
		siteTitle: ``,
	}

	return (
		<>
			<header className={`header ${moveStyle} `}>
				<Link className={`logo ${moveStyle} `} to="/">
					{siteTitle}
				</Link>
				<ul className={`menu ${moveStyle}`}>
					<li>
						<a href="#projetos">Projects</a>
					</li>
					<li>
						<a href="#experiencia">Skills</a>
					</li>
					<li>
						<a href="#experiencia">Career</a>
					</li>
					<li>
						<a href="#contato">Contact</a>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
				<a className={`icon ${moveStyle} `} href="">
					<FaGithub />
				</a>
			</header>
		</>
	)
}
