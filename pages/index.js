import React, { Component } from 'react'
import Head from 'next/head';

let slides = {
  agency: {
    title: "We are a growth and marketing studio, dedicated to paid aquistions. We live and work in NYC.",
    link: "https://agency.pearmill.com",
    cta_title: "Our Services"
  },
  creative: {
    title: "Automate your ad designs, on the back of expert designers who have spent $15M on Facebook alone.",
    link: "https://creative.pearmill.com",
    cta_title: "Learn More"
  },
  approver: {
    title: "The easiest way to get ad approvals from your clients. All in one place.",
    link: "https://approver.pearmill.com",
    cta_title: "Learn More"
  }
}

let keys = ['agency', 'creative', 'approver']

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      key: 'agency',
      index: 0
    }
  }

  componentDidMount () {
    this.refresh()
  }

  refresh () {
    clearTimeout(this._timer);

    this._timer = setTimeout(() => {
      let index = ((this.state.index) >= (keys.length - 1)) ? 0 : (this.state.index + 1)
      let key = keys[index]

      this.setState({
        index,
        key
      })

      this.refresh()
    }, 5000)
  }

  onSwitch (key) {
    return (event) => {
      event.preventDefault()

      this.setState({
        key,
        index: keys.indexOf(key)
      })

      this.refresh()
    }
  }

  render () {
    let slide = slides[this.state.key]
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,700" rel="stylesheet" />
        </Head>
        <div className='container'>
          <div className='header'>
            <img id='logo' src='/static/images/logo.png' />
            <h1>&mdash; a marketing studio.</h1>
          </div>
        </div>

        <div className='container lead'>
          <h2 className='lead'>{slide.title}</h2>
          <a href={slide.link} className='btn'>{slide.cta_title}</a>
        </div>

        <div className='container row'>
          <a href='#' className={`col ${this.state.key === 'agency' ? 'active' : ''}`} onClick={this.onSwitch('agency')}>AGENCY</a>
          <a href='#' className={`col ${this.state.key === 'creative' ? 'active' : ''}`} onClick={this.onSwitch('creative')}>CREATIVE API</a>
          <a href='#' className={`col ${this.state.key === 'approver' ? 'active' : ''}`} onClick={this.onSwitch('approver')}>AD APPROVER</a>
        </div>
        <style global jsx>{`
          @font-face {
              font-family: 'Avenir Next';
              src: url('/static/fonts/AvenirNext-Medium.woff2') format('woff2'),
                  url('/static/fonts/AvenirNext-Medium.woff') format('woff');
              font-weight: 500;
              font-style: normal;
          }

          @font-face {
              font-family: 'Avenir Next';
              src: url('/static/fonts/AvenirNext-Heavy.woff2') format('woff2'),
                  url('/static/fonts/AvenirNext-Heavy.woff') format('woff');
              font-weight: 900;
              font-style: normal;
          }

          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            pading: 0;
            color: white;
            background-color: #ec4957;
            font-family: 'Cormorant Garamond', serif;
            font-size; 16px;
          }

          body * {
            transition: all 0.3s ease-in-out;
            box-sizing: border-box;
          }

          .container {
            width: 1100px;
            margin: 0 auto;
          }

          .header {
            padding-top: 25px;
          }
          .header #logo {
            display: inline-block;
          }

          .header h1 {
            display: inline-block;
            vertical-align: top;
            line-height: 34px;
            padding: 0px;
            font-size: 2rem;
            margin: 0px;
          }

          .lead {
            margin-top: 12rem;
            text-align: center;
            font-size: 4.5rem;
            line-height: 5rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .row {
            margin-top: 6.25rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          .col {
            flex: 0 0 33.3333333%;

            padding: 5px;
          }

          a.col {
            font-family: 'Avenir Next';
            font-weight: 500;
            text-align: center;

            color: white;
            text-decoration: none;

            font-size: 1.25rem;
          }

          a.col.active, a.col:hover {
            font-weight: 900;
            letter-spacing: 1px;
          }

          .btn {
            padding: 17px 30px;
            font-weight: bold;
            font-size: 1.25rem;

            border: 1px solid white;
            border-radius: 40px;

            color: white;
            text-decoration: none;
          }

          @media (max-width: 1010px) {
            .container {
              width: 100%;
              padding: 0 15px;
            }
          }
        `}</style>
      </div>
    )
  }
}
