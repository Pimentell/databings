import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Tree" />
    <h1>Hola! Este es un ejemplo de la pagina</h1>
    <p>Este es un ejemplo de parrafo</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage