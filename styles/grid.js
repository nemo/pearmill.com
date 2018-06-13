import css from 'styled-jsx/css'
export default css`
  .grid {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .grid > .grid {
    flex-wrap: wrap;
    justify-content: left;
  }

  .col-flex {
    flex: 1 1;
  }

  .col-1 {
    flex: 1 1 10%;
  }

  .col-2 {
    flex: 1 1 20%;
  }

  .col-3 {
    flex: 1 1 30%;
  }

  .col-4 {
    flex: 1 1 40%;
  }

  .col-5 {
    flex: 1 1 50%;
  }

  .col-6 {
    flex: 1 1 60%;
  }

  .col-7 {
    flex: 1 1 70%;
  }

  [class^='col-'] {
    margin: 0 15px;
  }

  .grid .grid [class^='col-'] {
    margin: 0 0px;
  }

  @media (max-width: 1100px) {
    .grid {
      flex-direction: column;
    }

    [class^='col-'] {
      margin: 15px 0;
    }
  }

  @media (max-width: 600px) {
    .grid {
      flex-direction: column;
    }

    [class^='col-'] {
      margin: 15px 0;
    }
  }
`;
