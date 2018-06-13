import css from 'styled-jsx/css'
import { primaryColor, backgroundColor, borderColor, lightTextColor } from './variables'

export default css`
  section#pricing {
    background: white;
  }

  .pricing {
    /* color: white; */
    background: ${backgroundColor};

    /* border-radius: 5px; */
    padding: 0.8rem;
    margin-bottom: 1rem;
  }

  #pricing h2 {
    font-size: 2.5rem;
    text-align: center;
    font-style: normal;
    margin-top: 0px;
  }

  #pricing .lead {
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  }

  #pricing .secondary-lead {
    font-size: 0.9rem;

    color: ${borderColor};

    margin-top: 0px;
  }

  .pricing > * {
    /* color: white; */
  }

  .pricing .plan-name {
    font-weight: bold;
    font-size: 1.8rem;
    font-style: normal;
    margin-top: 0px;
    margin-bottom: 15px;
  }

  .pricing .price {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }

  .pricing .slider-container {
    padding: 0px 15px;
  }

  .pricing .price-header {
    text-align: center;
  }

  .pricing .pricing-model {
    padding-top: 15px;
  }

  .pricing .price.main {
    font-size: 8rem;
  }

  .pricing .sub-total {
    align-items: center;
  }

  .pricing .btn-container {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pricing .sub-total-header {
    padding-top: 50px;
  }

  .pricing .sub-total-header .plan-name {
    text-align: center !important;
  }

  .pricing .pricing-header {
    padding-top: 15px;
  }

  .pricing .sub-total .plan-name {
    padding-right: 15px;
    text-align: right;

    margin-bottom: 0;
  }

  .pricing .sub-total .description {
    padding-left: 15px;
    text-align: left;
  }

  .rc-slider-dot-active {
    border-color: ${primaryColor} !important;
  }

  .rc-slider-track {
    background-color: ${primaryColor} !important;
  }
  .rc-slider-handle {
    border-color: ${primaryColor} !important;
    background-color: ${primaryColor} !important;
  }

  .pricing .what-you-get:first-child {
    border-right: 1px solid ${borderColor};
  }

  .pricing .what-you-pay {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pricing p {
    font-size: 1.1rem;
  }

  .pricing .what-you-get, .pricing .what-you-pay {
    margin-top: 40px;
    padding: 0rem 0.8rem 1.2rem;
    height: 100%;
    /* background: ${backgroundColor}; */
    /* border-radius: 0.3rem; */
  }

  .what-you-get h4, .what-you-pay h4 {
    /* color: white; */
    /* text-align: center; */
    font-size: 1.2rem;
    font-weight: bold;
    font-style: normal;

    padding: 0;
  }

  .what-you-get h5, .what-you-pay h5 {
    /* color: white; */
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;

    margin-bottom: 0.5rem;

  }

  @media (max-width: 1100px) {
  }

  @media (max-width: 600px) {
  }
`
