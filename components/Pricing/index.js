// Components
import React, { Component } from 'react'
import Slider from 'rc-slider/lib/Slider';

// CSS
import { primaryColor, darkTextColor } from '../../styles/variables'
import sections from '../../styles/sections'
import grid from '../../styles/grid'
import button from '../../styles/button'
import pricing from '../../styles/pricing'
import 'rc-slider/assets/index.css';


const imageRewardPrice = 500;
const videoRewardPrice = 1000;
const animationRewardPrice = 2000;

export default class PricingComponent extends Component {

  constructor (props) {
    super(props)

    let imageRanges = {
      0: 0,
      5: {
        label: 5,
        style: { color: primaryColor }
      },
      15: {
        label: 15,
        style: { color: primaryColor }
      },
      30: {
        label: 30,
        style: { color: primaryColor }
      }
    }

    let videoRanges = {
      0: 0,
      5: {
        label: 5,
        style: { color: primaryColor }
      },
      15: {
        label: 15,
        style: { color: primaryColor }
      }
    }

    this.state = {
      sliders: {
        images: 2,
        videos: 1,
        animations: 1
      },
      ranges: {
        images: imageRanges,
        videos: videoRanges,
        animations: Object.assign({}, videoRanges)
      }
    }
  }
  componentDidMount () {
  }

  componentWillUnMount () {
  }

  onSliderChange (type) {
    return (value) => {
      this.setState({
        sliders: {
          ...this.state.sliders,
          [type]: value
        }
      })
    }
  }

  pricePerCreative (type) {
    let { sliders } = this.state

    switch (type) {
      case 'images':
        if (sliders.images == 0) return 0;
        else if (sliders.images < 5) return 75;
        else if (sliders.images < 15) return 71.25;
        else if (sliders.images < 30) return 69;
        else if (sliders.images >= 30) return 67.50;
      case 'videos':
        if (sliders.videos == 0) return 0;
        else if (sliders.videos < 5) return 600
        else if (sliders.videos < 15) return 570
        else if (sliders.videos >= 15) return 540
      case 'animations':
        if (sliders.animations == 0) return 0;
        else if (sliders.animations < 5) return 1800
        else if (sliders.animations < 15) return 1710
        else if (sliders.animations >= 15) return 1620

      default: return 0;
    }
  }

  monthlyPrice () {
    const { sliders } = this.state
    let imagePrice = sliders.images * this.pricePerCreative('images');
    let videoPrice = sliders.videos * this.pricePerCreative('videos')
    let animationsPrice = sliders.animations * this.pricePerCreative('animations')

    return (imagePrice + videoPrice + animationsPrice)
  }

  maxRewardPrice () {
    const { sliders } = this.state
    let imagePrice = sliders.images * imageRewardPrice;
    let videoPrice = sliders.videos * videoRewardPrice;
    let animationPrice = sliders.animations * animationRewardPrice;

    return (imagePrice + videoPrice + animationPrice)
  }

  render() {
    const { sliders, ranges } = this.state

    return (
      <section id='pricing'>
        <div className='container'>
          <h2>BYOP – Build Your Own Plan</h2>
          <h3 className='lead'>
            Receive the assets with an initial monthly subscription. If the assets perform well, a reward will be paid out to our creators. Rewards help our creators learn how their work performs - and incentivizes higher quality work.
          </h3>
        </div>

        <div className='pricing'>
          <div className='container'>
            <h3 className='lead'>Choose how many assets you need a month:</h3>
            <div className='grid pricing-header'>
              <div className='col-2'></div>
              <div className='col-5'></div>
              <div className='col-1 price-header desktop-only'># of Creatives</div>
              <div className='col-1 price-header desktop-only'>Price / Creative<br/>(monthly)</div>
              <div className='col-1 price-header desktop-only'>Max Reward<br />(for performance)</div>
            </div>

            <div className='grid pricing-model'>
              <div className='col-2'>
                <h3 className='plan-name'>Static-Image Ads</h3>
                <p className='secondary-lead'>Image ads, story or carousel ads optimzied for conversion for all major platforms.</p>
              </div>
              <div className='col-5 slider-container'>
                <Slider
                  min={0}
                  max={30}
                  marks={ranges.images}
                  value={sliders.images}
                  onChange={this.onSliderChange('images')}
                />


                <div className='grid' style={{display: 'none'}}>
                  <div className='what-you-get col-flex'>
                    <h4>You provide:</h4>
                    <p>x Any creative direction, brand guidelines, or restrictions.</p>
                    <p>x Any internal assets you'd like used.</p>
                    <p>x Information about specific audience that each creative will be used for.</p>
                  </div>
                  <div className='what-you-get col-flex'>
                    <h4>You'll receive:</h4>
                    {sliders.images > 0 ? (
                      <div>
                        <p>x Unlimited revisions.</p>
                        <p>x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval.</p>
                        <p>x {sliders.images} unique set(s) of creatives for any ad unit.</p>
                      </div>
                    ) : (
                      <p>Well, nothing. Obviously.</p>
                    )}
                  </div>
                </div>

              </div>
              <div className='col-1 price'><span className='mobile-only'># of Assets</span> {sliders.images}x</div>
              <div className='col-1 price'><span className='mobile-only'>Price / Creative<br/>(monthly)</span> {this.pricePerCreative('images').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
              <div className='col-1 price'><span className='mobile-only'>Max Reward<br/>(for performance)</span> {imageRewardPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
            </div>

            <div className='grid pricing-model'>
              <div className='col-2'>
                <h3 className='plan-name'>Video Ad Edits</h3>
                <p className='secondary-lead'>Video ads, cut from raw-footage you provide, optomized for conversion.</p>
              </div>
              <div className='col-5 slider-container'>
                <Slider
                  min={0}
                  max={15}
                  marks={ranges.videos}
                  value={sliders.videos}
                  onChange={this.onSliderChange('videos')}
                />


                <div className='grid' style={{display: 'none'}}>
                  <div className='what-you-get col-flex'>
                    <h4>You provide:</h4>
                    <p>x Any creative direction, brand guidelines, or restrictions.</p>
                    <p>x Any internal assets you'd like used.</p>
                    <p>x Information about specific audience that each creative will be used for.</p>
                  </div>
                  <div className='what-you-get col-flex'>
                    <h4>You'll receive:</h4>
                    {sliders.videos > 0 ? (
                      <div>
                        <p>x Unlimited revisions.</p>
                        <p>x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval.</p>
                        <p>x {sliders.videos} unique set(s) of creatives for any ad unit.</p>
                      </div>
                    ) : (
                      <p>Well, nothing. Obviously.</p>
                    )}
                  </div>
                </div>

              </div>
              <div className='col-1 price'><span className='mobile-only'># of Assets</span> {sliders.videos}x</div>
              <div className='col-1 price'><span className='mobile-only'>Price / Creative<br/>(monthly)</span> {this.pricePerCreative('videos').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
              <div className='col-1 price'><span className='mobile-only'>Max Reward<br/>(for performance)</span> {videoRewardPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
            </div>

            <div className='grid pricing-model'>
              <div className='col-2'>
                <h3 className='plan-name'>Animated Ads</h3>
                <p className='secondary-lead'>Animations (videos), uniquely produced and optimized for conversion. All major platforms supported.</p>
              </div>
              <div className='col-5 slider-container'>
                <Slider
                  min={0}
                  max={15}
                  marks={ranges.animations}
                  value={sliders.animations}
                  onChange={this.onSliderChange('animations')}
                />


                <div className='grid' style={{display: 'none'}}>
                  <div className='what-you-get col-flex'>
                    <h4>You provide:</h4>
                    <p>x Any creative direction, brand guidelines, or restrictions.</p>
                    <p>x Any internal assets you'd like used.</p>
                    <p>x Information about specific audience that each creative will be used for.</p>
                  </div>
                  <div className='what-you-get col-flex'>
                    <h4>You'll receive:</h4>
                    {sliders.animations > 0 ? (
                      <div>
                        <p>x Unlimited revisions.</p>
                        <p>x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval.</p>
                        <p>x {sliders.animations} unique set(s) of creatives for any ad unit.</p>
                      </div>
                    ) : (
                      <p>Well, nothing. Obviously.</p>
                    )}
                  </div>
                </div>

              </div>
              <div className='col-1 price'><span className='mobile-only'># of Assets</span> {sliders.animations}x</div>
              <div className='col-1 price'><span className='mobile-only'>Price / Creative<br/>(monthly)</span> {this.pricePerCreative('animations').toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
              <div className='col-1 price'><span className='mobile-only'>Max Reward<br/>(for performance)</span> {animationRewardPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
            </div>


            <div className='grid sub-total sub-total-header'>
              <div className='col-flex plan-name'>
                Total
              </div>
            </div>
            <div className='grid sub-total'>
              <div className='col-2'>&nbsp;</div>
              <div className='col-2'>
                <h3 className='plan-name'>Monthly Price</h3>
              </div>
              <div className='col-1 price'>
                {this.monthlyPrice().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </div>
              <div className='col-3 description'>
                <p>Charged on a monthly basis, this covers the cost of production for our creators.</p>
              </div>
              <div className='col-2'>&nbsp;</div>
            </div>

            <div className='grid sub-total'>
              <div className='col-2'>&nbsp;</div>
              <div className='col-2'>
                <h3 className='plan-name'>Maximum Reward</h3>
              </div>
              <div className='col-1 price'>
                {this.maxRewardPrice().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </div>
              <div className='col-3 description'>
                <p>Cap on reward, calculated as 2% of ad-spend on approved creative and charged bi-weekly. <b>This is on top of the monthly price.</b></p>
              </div>
              <div className='col-2'>&nbsp;</div>
            </div>

            <div className='btn-container'>
              <a className="typeform-share btn primary" href='https://paidgrowth.typeform.com/to/wxdzCL' data-mode="popup" data-hide-headers='true' data-hide-footer='true' target="_blank">Get Started</a>
            </div>

          </div>
        </div>

        {/* <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Static-Image Ads</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You provide:</h4>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any internal assets you'd like used.</p>
                  <p>x Information about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x 2 unique sets of creatives for any ad unit.</p>
                  <p>x 3 variations of copy to use. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$150</span></p>
                  <p>
                    Plus <span className='price'>%2</span> of ad-spend on the ads you receive from us, upto ${imageRewardPrice}.
                    <br />
                    Add <span className='price'>$50</span> if you need copywriting.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Video Ad Edits</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You provide:</h4>
                  <p>x Raw footage of shoots you've done that are related to the ad.</p>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any soundtrack you'd like to use.</p>
                  <p>x Information about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x Edited video ad based off of raw footage provided.</p>
                  <p>x Music layered for video. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$600</span></p>
                  <p>
                    Plus <span className='price'>%2</span> of ad-spend on the ads you receive from us, upto ${videoRewardPrice}.
                    <br />
                    Add <span className='price'>${videoRewardPrice}</span> if you need music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='pricing'>
          <div className='container'>
            <h3 className='plan-name'>Animated Ads</h3>
            <div className='grid'>
              <div className='col-flex'>
                <div className='what-you-get'>
                  <h4>You'll provide:</h4>
                  <p>x Any creative direction, brand guidelines, or restrictions.</p>
                  <p>x Any soundtrack you'd like to use.</p>
                  <p>x Information about specific audience that the creative will be used for.</p>
                  <h4>You'll receive:</h4>
                  <p>x Unique animated video.</p>
                  <p>x Music layered for video. (if ordered)</p>
                </div>
              </div>
              <div className='col-flex'>
                <div className='what-you-pay'>
                  <p><span className='price main'>$1,800</span></p>
                  <p>
                    Plus <span className='price'>%2</span> of ad-spend on the ads you receive from us, upto ${animationRewardPrice}.
                    <br />
                    Add <span className='price'>${animationRewardPrice}</span> if you need music.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <style jsx>{sections}</style>
        <style>{pricing}</style>
        <style jsx>{grid}</style>
        <style jsx>{button}</style>
      </section>
    )
  }
}
