import { primaryColor, backgroundColor, borderColor } from './variables'

export default `
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
    max-width: 65rem;
    margin: 0 auto;
  }

  .pricing > * {
    /* color: white; */
  }

  .pricing .plan-name {
    font-weight: bold;
    font-size: 2rem;
    font-style: normal;
    margin-top: 0px;
  }

  .pricing .price {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: normal;
  }

  .pricing .price.main {
    font-size: 8rem;
  }

  .pricing .what-you-get {
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
    padding: 0.05rem 0.8rem;
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
