import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        --font-family-base: "Open Sans",system-ui,sans-serif;
        --font-family-display: "Open Sans",system-ui,sans-serif;

        --text-xs: 0.5rem;
        --text-sm: 0.875rem;
        --text-base: 1rem;
        --text-lg: 1.125rem;
        --text-xl: 1.25rem;
        --text-2xl: 1.5rem;
        --text-4xl: 2.25rem;
        --text-5xl: 3rem;
        
        --spacing-1: 0.25rem;
        --spacing-2: 0.5rem;
        --spacing-3: 0.75rem;
        --spacing-4: 1rem;
        --spacing-5: 1.25rem;
        --spacing-6: 1.5rem;
        --spacing-7: 1.75rem;
        --spacing-8: 2rem;
        --spacing-9: 2.25rem;
        --spacing-10: 2.5rem;
        --spacing-12: 4rem;
        --spacing-14: 4.5rem;
        
        --color-text: rgb(58, 56, 75);

        --color-gray-50: #ffffff; 
        --color-gray-100: #fffefe;
        --color-gray-200: #fefdfd; 
        --color-gray-300: #fdfcfc; 
        --color-gray-400: #fcfafa; 
        --color-gray-500: #faf8f8; 
        --color-gray-600: #e1dfdf; 
        --color-gray-700: #bcbaba; 
        --color-gray-800: #969595; 
        --color-gray-900: #7b7a7a;

        --color-red-50: #fef6f6; 
        --color-red-100: #fdecec; 
        --color-red-200: #fbd0d0;
        --color-red-300: #f9b4b4; 
        --color-red-400: #f47c7c; 
        --color-red-500: #ef4444; 
        --color-red-600: #d73d3d; 
        --color-red-700: #b33333; 
        --color-red-800: #8f2929; 
        --color-red-900: #752121;

        --color-theme-teal: #3de5b2;
        --color-theme-teal-600: #1cd29b;

        --color-theme-yellow: rgb(244, 238, 34);
        --color-theme-blue: #160f57;
        --color-theme-blue-100: #f3f3f7;
        --color-theme-blue-900: rgb(8, 5, 28);
    }

    html {
        -webkit-text-size-adjust: 100%;
        line-height: 1.5;
        font-size: 14px;
        box-sizing: border-box;      
    }

    *, *:before, *:after {
        box-sizing: border-box;      
    }

    body {
        font-family: ${theme.fontFamily.base};
        color: ${theme.colors.text};
        background: ${theme.colors.gray400};
    }
`;
