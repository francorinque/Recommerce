import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    :root{
        --bg: #18181b;
        --bg-2: #27272a;
        --text: #e4e4e7;
        --text-2: #c5c5c7;
        --ui: #a3e635;
        --ui-2: #B8EC62;
        --warning: #D9534F;
        --regular: 300;
        --semibold: 600;
        --bold: 800;
        --h-nav: 80px;
        --max-w: 1300px;
        --radius: 5px;
        --radius-2: 10px;
        --price: #e4e4e7;
        --size-icon: 1.2rem;
    }

    *{
        &::-webkit-scrollbar {
        width: .6rem;              
    }   

    &::-webkit-scrollbar-track {
        background: none;      
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-2);    
        border-radius: var(--radius);       
    }
    }
    html{
        scroll-behavior: smooth;
    }

    body{
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        background-color: var(--bg);
        
      
    }
    
    

    h1,h2{
        margin: 0;
        margin-bottom: .8rem;
    }

    a{
        color: inherit;
    }

    img{
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }


    section{
        padding: 6.25rem 0;
    }

    
`
