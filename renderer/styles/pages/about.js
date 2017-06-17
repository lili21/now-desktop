export const mainStyles = `
  div {
    background: #ECECEC;
    height: 100vh;
    font-family: -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen,
      Helvetica Neue,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-app-region: drag;
  }

  .window-controls {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    height: 10px;
    padding: 10px;
    z-index: 5000; /* the slick arrow is at 4000 */
    background: transparent;
  }

  .window-controls span {
    opacity: .5;
    font-size: 0;
    display: block;
    -webkit-app-region: no-drag;
    margin-left: 10px;
  }

  .window-controls span:hover {
    opacity: 1;
  }

  a {
    -webkit-app-region: no-drag;
  }

  .wrapper {
    text-align: center;
    padding-top: 40px;
    color: #434343;
  }

  img {
    width: 100px;
  }

  h1, h2 {
    margin: 0;
  }

  h1 {
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0 15px 0;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    cursor: default;
  }

  h2 span {
    color: #5319e7;
    cursor: pointer;
  }

  .window-title {
    font-size: 12px;
    color: #434343;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 37px;
    line-height: 37px;
  }

  article {
    background: #fff;
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    height: 135px;
    text-align: left;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: scroll;
    -webkit-app-region: no-drag;
    -webkit-user-select: text;
    margin-top: 20px;
  }

  article h1, article p {
    color: #707070;
    font-size: 11px;
  }

  article h1 {
    text-transform: uppercase;
    margin-top: 15px;
  }

  article h1:first-child {
    margin-top: 0;
  }

  article p {
    line-height: 19px;
  }

  article a {
    color: #707070;
    text-decoration: none;
  }

  article a:hover {
    color: #2b2b2b;
  }

  .copyright {
    font-size: 11px;
    margin-top: 11px;
    display: block;
  }

  .copyright a {
    color: inherit;
    text-decoration: none;
  }

  .copyright a:before {
    content: '\\25B2';
  }

  .copyright a:hover {
    color: #000;
  }

  nav a {
    font-size: 11px;
    color: #434343;
    text-decoration: none;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
  }

  nav a:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 10px;
    background: #434343;
    top: 2px;
  }

  nav a:hover {
    color: #000;
  }

  nav a:last-child:after {
    display: none;
  }
`

export const globalStyles = `
  body {
    margin: 0;
  }

  ::selection {
    background: #A7D8FF;
  }
`

export const updateStyles = `
  .update {
    font-size: 11px;
    margin-top: 5px;
    display: none;
  }

  .update.latest {
    color: #00A819;
  }

  .update.latest span {
    cursor: default;
  }

  .update.latest svg {
    margin-bottom: -3px;
    margin-right: 5px;
  }

  .update.development {
    color: #0080c1;
  }
`