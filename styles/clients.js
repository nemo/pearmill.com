import css from 'styled-jsx/css'

export default css`
  #clients h1 {
    text-align: center;
    font-style: normal;
    padding-bottom: 3rem;
  }

  #clients .col-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 10px;
    margin-bottom: 25px;
  }

  #clients .client-logo {
    min-height: 60px;
    background-repeat: no-repeat;

    background-size: contain;
    background-position: center;
  }
`
