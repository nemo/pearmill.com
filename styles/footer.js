import { primaryColor, lightTextColor, darkTextColor } from './variables'

export default `

section#footer-cta {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

section#footer-cta .container {
  padding: 0rem 0 3rem;
}

#footer-cta h1 {
  font-family: 'Avenir Medium';
  font-size: 2.8rem;
  font-style: normal;
  margin-bottom: 0.5rem;
}

#footer-cta h2 {
  font-family: 'Avenir';
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin: 0 0 3rem 0;
}

#footer {
  background: ${darkTextColor};
  color: ${lightTextColor};
}

#footer a {
  color: ${lightTextColor};
  font-weight: bold;
}

#footer ul, #footer ul li {
  list-style: none;
}

#footer ul {
  padding: 1rem 0;
}

#footer ul li {
  padding-bottom: 0.8rem;
}

`;
