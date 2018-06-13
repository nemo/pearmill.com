import css from 'styled-jsx/css'
import { darkTextColor } from './variables'
export default css`

@import url("/static/css/normalize.css");
@import url("/static/css/animate.css");

@font-face {
  font-family: 'Adobe Garamond Pro';
  src: url('/static/fonts/Adobe-Garamond-Pro-Regular.eot');
  src: url('/static/fonts/Adobe-Garamond-Pro-Regular.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Adobe-Garamond-Pro-Regular.woff') format('woff'),
    url('/static/fonts/Adobe-Garamond-Pro-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir';
  src: url('/static/fonts/Avenir-Book.eot');
  src: url('/static/fonts/Avenir-Book.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Avenir-Book.woff') format('woff'),
    url('/static/fonts/Avenir-Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir Medium';
  src: url('/static/fonts/Avenir-Medium.eot');
  src: url('/static/fonts/Avenir-Medium.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Avenir-Medium.woff') format('woff'),
    url('/static/fonts/Avenir-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir';
  src: url('/static/fonts/Avenir-BookOblique.eot');
  src: url('/static/fonts/Avenir-BookOblique.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Avenir-BookOblique.woff') format('woff'),
    url('/static/fonts/Avenir-BookOblique.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Avenir';
  src: url('/static/fonts/Avenir-Light.eot');
  src: url('/static/fonts/Avenir-Light.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Avenir-Light.woff') format('woff'),
    url('/static/fonts/Avenir-Light.ttf') format('truetype');
  font-weight: lighter;
  font-style: normal;
}


@font-face {
  font-family: 'Advertising Script';
  src: url('/static/fonts/AdvertisingScript-Bold.eot');
  src: url('/static/fonts/AdvertisingScript-Bold.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/AdvertisingScript-Bold.woff') format('woff'),
    url('/static/fonts/AdvertisingScript-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

body {
  color: ${darkTextColor};
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
  font-family: "Adobe Garamond Pro", serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5 {
  font-family: 'Adobe Garamond Pro';
  font-weight: normal;
  font-style: italic;
  color: #5E5E5E;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.lead {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 0.3rem;
}

* {
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  html, body {
    font-size: 14px;
  }

  .container {
    width: 100%;

    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 600px) {
  html, body {
    font-size: 13px;
  }

  .container {
    width: 100%;

    padding-left: 1rem;
    padding-right: 1rem;
  }
}
`;
