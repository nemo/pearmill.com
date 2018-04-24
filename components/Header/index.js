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

    scrollToElement(`#${href}`, {
      align: 'middle'
    })
  }

  render() {
    const { children } = this.props
    const { text } = this.state

    return (
      <header id='header'>
        <div className='container'>
          <h1 id='logo'>Pearmill</h1>

          <ul>
            <li><a href='#work' onClick={this.scroll}>How It Works</a></li>
            <li><a href='#case-studies' onClick={this.scroll}>Examples</a></li>
            <li><a href='https://agency.pearmill.com'>Agency</a></li>
          </ul>

          {children}
        </div>
        <style jsx>{header}</style>
        <style jsx>{button}</style>
      </header>
    )
  }
}
