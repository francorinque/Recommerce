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
        --text-2: #a3e635;
        --regular: 300;
        --semibold: 600;
        --bold: 800;
        --h-nav: 80px;
        --max-w: 1300px;
        --radius: 5px;
    }


    body{
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        background-color: var(--bg);
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

    
`
