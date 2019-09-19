import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import User from "../components/user"
import CurrentDate from "../components/current-date"

const Header = ({ siteTitle }) => (
  <header className="header">
    <User />
    <h1>
      <Link
        to="/"
        style={{
          color: `#333`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <CurrentDate />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header