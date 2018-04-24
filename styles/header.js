import { primaryColor } from './variables'

export default `

#header {
  padding-top: 5.9rem;

  position: relative;
  background: ${primaryColor};

  color: white;
}

#header:after {
  top: 100%;
  left: 0%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0px;
  position: absolute;
  pointer-events: none;
  border-color: rgba(236, 93, 87, 0);
  border-top-color: ${primaryColor};
  border-width: 80px;
  margin-left: -80px;
}

#logo {
  display: inline-block;

  font-family: 'Advertising Script';

  font-size: 35px;
  color: white;

  margin-top: 0;
}

#header ul {
  float: right;
  list-style-type: none;
  margin-top: 0px;
}


#header ul li {
  display: inline-block;

  font-family: 'Avenir Medium';
  font-size: 1.2rem;

  vertical-align: top;

  color: white;
  padding-left: 2.4rem;
}

#header ul li a {
  color: white;
  text-decoration: none;
}

#header h1:not(#logo) {
  padding-top: 5rem;
  text-align: center;
  font-size: 2.5rem;
  color: white;
}

#header h2 {
  padding-bottom: 5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  line-height: 1.6rem;

  /* border-right: 0.57rem solid white; */
  vertical-align: middle;
  font-style: normal;
  text-align: center;

  max-width: 50rem;
  margin: 0 auto;
  word-wrap: break-word;
}

/* #header h2:after {
  content: ' ';
  width: 0.57rem;
  height: 100%;
  background: white;
  animation-name: blinker;
  animation-duration: 0.6s;
  animation-iteration-count:infinite;
  animation-timing-function:ease-in-out;
  animation-direction: alternate;
}

@-webkit-keyframes blinker {
  from {opacity: 1.0;}
  to {opacity: 0.0;}
}
 */
.blinking-cursor {
  display: inline-block !important;
  vertical-align: middle;
  margin-left: 1.1rem;
  height: 16.45rem;
  width: 0.57rem;
  background: white;
  animation-duration: 2000ms;

  content: ' ';
}

#header #cta {
  text-align: center;
  padding-bottom: 7.25rem;
}

#header #cta a {
  margin-right: 1.875rem;
  display: inline-block;
}

@media (max-width: 1200px) {
  #header #logo {
    padding-left: 1rem;
  }

  #header ul {
    padding-right: 1rem;
  }
}

@media (max-width: 600px) {
  #header {
    padding-top: 3rem;
  }
  #header ul {
    float: none;
    padding: 0;
  }

  #header h1 {
    font-size: 2rem;
  }

  #header h2 {
    font-size: 1.5rem;
  }

  .blinking-cursor {
    height: 5.5rem;
    width: 0.30rem;
  }

  #header #cta {
    text-align: center;
  }

  #header #cta a:first-child {
    margin-bottom: 1.875rem;
  }
}
`;
