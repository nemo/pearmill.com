import React, { Component } from 'react'
import sections from '../../styles/sections'
import grid from '../../styles/grid'
import pricing from '../../styles/pricing'

export default class PricingComponent extends Component {

  componentDidMount () {
  }

  componentWillUnMount () {
  }

  render() {

    return (
      <section id='pricing'>
        <div className='container'>
          <h2>Pricing</h2>
          <h3 className='lead'>All our prices follow a royalty model – you first pay up-front to receive creative and when you use them in ads (and they perform!), we charge you a percentage of the spend you're making on that specific creative.</h3>
        </div>

        <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Still-Image Ads</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You provide:</h4>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any internal assets you'd like used.</p>
                  <p>x Informatio about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x 2 unique sets of creatives for any ad unit.</p>
                  <p>x 3 variations of copy to use. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$150</span></p>
                  <p>
                    Add <span className='price'>$50</span> if you need copywriting.
                    <br />
                    Alongside <span className='price'>%2</span> of ad-spend on the ads you receive from us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Video Ad Edits</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You provide:</h4>
                  <p>x Raw footage of shoots you've done that are related to the ad.</p>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any soundtrack you'd like to use.</p>
                  <p>x Informatio about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x Edited video ad based off of raw footage provided.</p>
                  <p>x Music layered for video. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$600</span></p>
                  <p>
                    Add <span className='price'>$500</span> if you need music.
                    <br />
                    Alongside <span className='price'>%2</span> of ad-spend on the ads you receive from us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Animated Ads</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You'll provide:</h4>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any soundtrack you'd like to use.</p>
                  <p>x Informatio about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x Unique animated video.</p>
                  <p>x Music layered for video. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$1,800</span></p>
                  <p>
                    Add <span className='price'>$500</span> if you need music.
                    <br />
                    Alongside <span className='price'>%2</span> of ad-spend on the ads you receive from us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{sections}</style>
        <style jsx>{pricing}</style>
        <style jsx>{grid}</style>
      </section>
    )
  }
}