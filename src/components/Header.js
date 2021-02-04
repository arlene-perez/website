import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-home"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>UNITED BROKERS REALTY</h1>
                <p>Our professional staff is ready to help you with all your Real Estate needs
                including Escrow and Mortgage services. We serve all areas, especially in
                L.A. and Orange County. We speak Spanish and English.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
