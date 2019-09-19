import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Button from "../components/button"
import SEO from "../components/seo"
import Clock from "../components/clock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Clock />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button text="Add Task"></Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
