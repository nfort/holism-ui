import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`                            
    html, body {
      box-sizing: border-box;
    }     
    
    body {   
      margin: 0;
      padding: 0;
      height: 100%;           
      color: #262C40;
      font-family: 'Proxima Nova', sans-serif !important;           
    }
  
    #ModalContainer {
      position: absolute;
      z-index: 100;
    }   
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Proxima Nova', sans-serif;
      font-weight: bold;
      margin: 0;
    } 
    
    
    h1 {
      font-size: 1.75rem;
    }
    
    h2 {
      font-size: 1.375rem;
    }
    
    h3 {
      font-size: 1.125rem;
    }
    
    h4 {
      font-size: 1rem;
    }
    
    h5 {
      font-size: 0.875rem;
    }
    
    h6 {
      font-size: 0.725rem;
    }  
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
        
    .hidden {
        display: none;
    }        
    
    a {
      color: #0057B6;
      cursor: pointer;
      text-decoration: none;
    }  

    p {
     color: #B8BDCE; 
     font-size: 1.125rem;
     margin: 0;
     padding: 0;
    }  
    
    .form {
        width: 20rem;
    }
    
    pre {
      margin: 0;
      padding: 0;
    }                                   
`;
