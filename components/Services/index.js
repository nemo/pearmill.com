import React, { Component } from 'react'
import sections from '../../styles/sections'
import grid from '../../styles/grid'
import services from '../../styles/services'

export default class ServicesComponent extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount () {
  }

  componentWillUnMount () {
  }

  render() {

    return (
      <section id='work'>
        <div id='work-clip'></div>
        <div className='container'>
          <div className='grid services'>
            <div className='col-5 service-grid'>
              <div className='service-title'>
                <h2>1.</h2>
                <h3>Brief thousands of creators at once</h3>
              </div>
              <div className='service'>
                <p>Submit a templatized creative brief describing the campaign you’d like to run, who you’re targeting and what its goals are.</p>
              </div>
              <div className='service'>
                <p>It’ll be fluid and we’ll ask you lots of questions about your brand, what it stands for, and any restrictions or inspirations you’d like to convey.</p>
              </div>
            </div>

            <div className='col-5 service-grid'>
              <div className='service-title'>
                <h2>2.</h2>
                <h3>Receive Assets and start running</h3>
              </div>
              <div className='service'>
                <p>We’ll automatically upload the assets and ads to the appropriate platforms, so you can start using them right away!</p>
                <p>We’ll also track their progress and performance when you start allocating budget towards them.</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{sections}</style>
        <style jsx>{services}</style>
        <style jsx>{grid}</style>
      </section>
    )
  }
}
