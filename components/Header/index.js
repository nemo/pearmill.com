import React, { Component } from 'react'
import header from '../../styles/header'
import button from '../../styles/button'
import scrollToElement from 'scroll-to-element'

export default class HeaderComponent extends Component {

  constructor (props) {
    super(props)

    this.state = {
      text: '',
      loopNum: 0
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b +"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
  }

  componentWillUnMount () {
    clearTimeout(this._timer);
  }

  scroll (event) {
    event.preventDefault()
    let href = (event.target.href || '').split('#')[1];

    console.log('href', href)

    scrollToElement(`#${href}`, {
      align: 'middle'
    })
  }

  render() {
    const { text } = this.state

    return (
      <header id='header'>
        <div className='container'>
          <h1 id='logo'>Pearmill</h1>

          <ul>
            <li><a href='#work' onClick={this.scroll}>How It Works</a></li>
            <li><a href='#case-studies' onClick={this.scroll}>Examples</a></li>
            <li><a className='typeform-share' href='https://paidgrowth.typeform.com/to/wxdzCL'>Get Started</a></li>
          </ul>

          <h1>
            Animation, Video, and Image ad creative at scale.
          </h1>

          <h2>
            Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform.
          </h2>

          <div id='cta'>
            <a className="typeform-share btn white" href='https://paidgrowth.typeform.com/to/wxdzCL' data-mode="popup" data-hide-headers='true' data-hide-footer='true' target="_blank">Get Started</a>
              <a href='#examples' onClick={this.scroll} className='btn'>See Examples</a>
            </div>
          </div>

        <style jsx>{header}</style>
        <style jsx>{button}</style>
      </header>
    )
  }
}
