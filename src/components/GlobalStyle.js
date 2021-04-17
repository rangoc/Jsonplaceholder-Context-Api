import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body { 
    font-family: 'Montserrat', sans-serif;
  }
  input { 
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
  h3 { 
    font-size: 1.3rem; 
    color: #333; 
    padding: 1.5rem 0rem;  
  }
  p { 
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969; 
  }
  a { 
    text-decoration: none; 
    color: #333; 
  }
  p { 
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969; 
  }
  h2 { 
    font-size: 3rem; 
    font-family: 'Abril Fatface', cursive; 
    font-weight: lighter;
  } 
`;

export default GlobalStyle;
