import React, { Component } from 'react'
import scrollToElement from 'scroll-to-element'
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
import header from '../styles/header'
import button from '../styles/button'

export default class IndexPage extends Component {

  scroll (event) {
    event.preventDefault()
    let href = (event.target.href || '').split('#')[1];

    scrollToElement(`#${href}`, {
      align: 'middle'
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Pearmill – Beautiful Ad Creative from Inspiring Creators</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="Pearmill – Quality Ad Creative at Scale" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform." />
          <meta property="og:url" content="https://pearmill.com" />
          <meta property="og:image" content="https://pearmill.com/static/logo-card.png" />
          <link rel="shortcut icon" href="https://pearmill.com/static/favicon.ico" />
        </Head>

        <Header>
          <h1>
            Get beautiful ad creative from inspiring creators
          </h1>

          <h2>
            Tap into thousands of expert copy-writers, designers, and animators to produce your ads and grow your company.
          </h2>

          <div id='cta'>
            <a className="typeform-share btn white" href='https://paidgrowth.typeform.com/to/wxdzCL' data-mode="popup" data-hide-headers='true' data-hide-footer='true' target="_blank">Get Started</a>
              <a href='#case-studies' onClick={this.scroll} className='btn'>See Examples</a>
          </div>
        </Header>

        <Clients />
        <Services />
        <Pricing />
        <CaseStudies />
        <Footer />

        <style global jsx>{globalCSS}</style>
        <style jsx>{sections}</style>
        <style jsx>{header}</style>
        <style jsx>{button}</style>
      </div>
    )
  }
}
