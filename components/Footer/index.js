import React, { Component } from 'react'
import footer from '../../styles/footer'
import sections from '../../styles/sections'
import button from '../../styles/button'
import grid from '../../styles/grid'

export default () => (
  <section id='footer-cta'>
    <div className='container'>
      <h2>Are you a Creative?</h2>

      <a className="typeform-share btn primary" href='https://paidgrowth.typeform.com/to/gLv4xK' data-mode="popup" data-hide-headers='true' data-hide-footer='true' target="_blank">Join Us</a>
    </div>


    <div id='footer'>
      <div className='grid'>
        <div className='col-3'>&nbsp;</div>
        <div className='col-3'>
          <ul>
            <li>Privacy Policy | Terms of Service</li>
            <li>&copy; Copyright 2018 – Suto Collective Inc. DBA Pearmill</li>
            <li>Artists are the new song writers.</li>
          </ul>
        </div>
        <div className='col-3'>&nbsp;</div>
      </div>
    </div>
    <style jsx>{sections}</style>
    <style jsx>{grid}</style>
    <style jsx>{footer}</style>
    <style jsx>{button}</style>
  </section>
)
