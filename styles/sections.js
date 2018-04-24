import { primaryColor, borderColor, backgroundColor } from './variables'

export default `
  section .container, section.container {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  section.background {
  }

  section#footer-cta {
    text-align: center;

    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
    background: ${backgroundColor};
  }


  #case-studies-clip {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;

    background: ${backgroundColor};

    -webkit-clip-path: polygon(0 79%, 100% 20%, 100% 100%, 0% 100%);
    clip-path: polygon(0 79%, 100% 20%, 100% 100%, 0% 100%);
  }

  #work-clip {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background: white;
    height: 280px;
  }

  section#work {
    background: ${primaryColor};
    background: linear-gradient(0deg, ${primaryColor} 0%, ${primaryColor} 99.9%, white 98%);
    color: white;
  }

  section#work * {
    color: white;
  }

  @media (max-width: 1200px) {
    /* section#agency p {
      width: 80%;
    } */
  }

  @media (max-width: 600px) {
    /* section#agency p {
      width: 100%;
    } */
  }
`;
