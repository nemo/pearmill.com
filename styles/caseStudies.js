import { borderColor } from './variables'

export default `
  #case-studies {
    position: relative;
    overflow: hidden;
  }

  #case-studies .container {
    z-index: 100000;
  }

  #case-studies .col-7 {
    /* margin-right: -400px; */
  }

  #case-studies h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 0px;
    font-style: normal;
  }

  #case-studies h3 {
    text-align: center;
    max-width: 52rem;

    margin: 0 auto 2rem;
  }

  .case-img-container {
    padding: 5px;
    max-height: 30rem;

    transition: all 1s ease-in-out;
    animation: fadein 2s;
  }

  .case-img-container img {
    border-radius: 3px;

    box-shadow: 0px 0px 3px 0px ${borderColor};
  }

  .case-study-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #case-studies h1 {
    font-family: 'Avenir Medium';
    font-style: normal;
    font-size: 3.12rem;
    margin-bottom: 0rem;
  }

  #case-studies a {
    margin-top: 0rem;
    font-size: 1.1rem;
  }

  #case-studies p {
    font-family: 'Avenir';
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 1200px) {
    #case-studies .col-7 {
      margin-right: 0px;
    }
  }

  @media (max-width: 600px) {
    #case-studies .col-7 {
      margin-right: 0px;
    }
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`
