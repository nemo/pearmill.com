import React, { Component } from 'react'
import Head from 'next/head';
// Components
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import Clients from '../components/Clients'
import Pricing from '../components/Pricing'
import Header from '../components/Header'
import Footer from '../components/Footer'
// CSS
import globalCSS from '../styles/global'
import sections from '../styles/sections'

export default class IndexPage extends Component {

  render() {
    return (
      <div>
        <Head>
          <title>Pearmill – Quality Ad Creative at Scale</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="Pearmill – Quality Ad Creative at Scale" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform." />
          <meta property="og:url" content="https://pearmill.com" />
          <meta property="og:image" content="https://pearmill.com/static/logo-card.png" />
          <link rel="shortcut icon" href="https://pearmill.com/static/favicon.ico" />
        </Head>

        <Header />

        <Clients />
        <Services />
        <Pricing />
        <CaseStudies />
        <Footer />

        <style global jsx>{globalCSS}</style>
        <style jsx>{sections}</style>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-104380641-2"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-104380641-2');
        `}} />
      </div>
    )
  }
}
