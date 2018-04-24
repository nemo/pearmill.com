import React, { Component } from 'react'
import grid from '../../styles/grid'
import sections from '../../styles/sections'
import clients from '../../styles/clients'

export default () => (
  <section id='clients'>
    <div className='container'>
      <h1>Our creatives have served the very best</h1>
      <div className='grid'>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/humi.png)'
          }}>
        </div>
      </div>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/stdlib.png)'
          }}>
          </div>
        </div>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/cover.png)'
          }}>
          </div>
        </div>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/keenio.png)'
          }}>
          </div>
        </div>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/frankandoak.png)'
          }}>
          </div>
        </div>
        <div className='col-1'>
          <div className='client-logo' style={{
            backgroundImage: 'url(/static/clients/grokker.png)'
          }}>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{grid}</style>
    <style jsx>{clients}</style>
    <style jsx>{sections}</style>
  </section>
)
