import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height:1;
    box-sizing:border-box;
  }
  // copied from bootstrap
  :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #28a745;
    --bs-teal: #20c997;
    --bs-cyan: #17a2b8;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #28a745;
    --bs-info: #17a2b8;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #343a40;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --font-bolder: 700;
    --font-bold: 500;
    --font-normal: 400;
    --p-line-height: 1.5;
  }
  body {
    font-family: Roboto,Helvetica Neue,sans-serif;
    font-size: 1rem;
    font-weight: var(--font-normal);
    color: #212529;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  a,
  button,
  input,
  select,
  textarea,
  img {
    outline: none;
    border:none;
    appearance:none;
  }

  ul,
  li {
    list-style: none
  }

  a,
  button {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  a {
    color:inherit;
    text-decoration:none;
  }

  button[disabled] {
    cursor: not-allowed;
  }
  img {
    max-width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x:hidden;
  }

  html, body {
    height: 100%;
  }
  .truncate-overflow {
  --max-lines: 3;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem; /* space for ellipsis */
}
`
export default GlobalStyles
