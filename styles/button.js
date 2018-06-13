import css from 'styled-jsx/css'
import { primaryColor, borderColor } from './variables'

export default css`
  .btn {
    display: inline-block;
    font-family: 'Avenir Medium';
    font-size: 20px;

    color: white;
    border: 1px solid white;
    border-radius: 50px;
    text-align: center;

    min-width: 230px;
    min-height: 51.5px;
    line-height: 51.5px;
  }

  .btn:hover {
    cursor: pointer;

    color: ${primaryColor};
    background: white;
  }

  .btn.primary {
    color: white;
    border: 1px solid ${primaryColor};
    background: ${primaryColor};
  }

  .btn.primary:hover {
    background: transparent;
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
  }

  .btn.white {
    color: ${primaryColor};
    border-color: white;
    background: white;
  }

  .btn.white:hover {
    color: white;
    border-color: white;
    background: ${primaryColor};
  }
`;
