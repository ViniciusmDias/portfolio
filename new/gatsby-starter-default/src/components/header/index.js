
import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./styles.css"

export default function Header ({siteTitle}) {
    Header.propTypes = {
        siteTitle: PropTypes.string,
    }
      
    Header.defaultProps = {
        siteTitle: ``,
    }
    return (
        <>
            <header>
                <Link to="/">{siteTitle}</Link>
                <ul>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <button><p>EN</p></button>
            </header>
        </>
    )
} 
