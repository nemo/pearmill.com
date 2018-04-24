export default `
  .service-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .service-icon {
    margin: 0 auto;

    background: #D8D8D8;
    border-radius: 100px;

    width: 1rem;
    height: 1rem;

    flex: 0 0 1rem;

    content: ' ';

    margin-bottom: 1rem;
  }

  .service-icon.active {
    background: white;
    width: 1.2rem;
    height: 1.2rem;
    flex: 0 0 1.2rem;
  }

  .service-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .service-title h2 {
    font-size: 9.3rem;
    margin: 0;

    color: #F1F1EC;
    opacity: 0.4;
  }

  .service-title h3 {
    font-size: 3.12rem;
    margin: 0;
  }

  .service.col-5 {
    flex: 1 1 50%;
  }

  .service.col-5:last-child {
    flex: 0 0 50%;
  }

  .service.col-10 {
    flex: 1 1 100%;
  }

  .service {
    margin: 0 0;
    padding: 0 10px;
  }

  .service h4 {
    font-family: 'Avenir Medium';
    font-size: 1.35rem;
    color: white;
    font-style: normal;
    margin-bottom: 0rem;
  }

  .service p {
    font-family: 'Avenir';
    font-size: 1.125rem;
    line-height: 1.4rem;
    opacity: 0.87;
    color: white;
  }

  .service-grid {
    min-height: 29.1rem;
    flex-shrink: 0 !important;
  }

  @media (max-width: 1100px) {
    .service-icons {
      display: block;
    }

    .service-icons .service-icon {
      display: inline-block;
      margin-right: 15px;
    }
  }

  @media (max-width: 600px) {
    .service {
      flex: 1 1 100%;
    }
  }
`
