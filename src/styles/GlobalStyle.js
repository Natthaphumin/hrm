import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    &, &.light-mode {
         --color-gray-0: #fff;
    --color-gray-50: oklch(0.985 0.002 247.839);
    --color-gray-100: oklch(0.967 0.003 264.542);
    --color-gray-200: oklch(0.928 0.006 264.531);
    --color-gray-300: oklch(0.872 0.01 258.338);
    --color-gray-400: oklch(0.707 0.022 261.325);
    --color-gray-500: oklch(0.551 0.027 264.364);
    --color-gray-600: oklch(0.446 0.03 256.802);
    --color-gray-700: oklch(0.373 0.034 259.733);
    --color-gray-800: oklch(0.278 0.033 256.848);
    --color-gray-900: oklch(0.21 0.034 264.665);
    --color-gray-950: oklch(0.13 0.028 261.692);

    --color-blue-100: oklch(0.932 0.032 255.585);
    --color-blue-700: oklch(0.488 0.243 264.376);

    --color-green-100: oklch(0.962 0.044 156.743);
    --color-green-700: oklch(0.527 0.154 150.069);

    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;

    --color-yellow-100: oklch(0.973 0.071 103.193);
    --color-yellow-700: oklch(0.554 0.135 66.442);

    --color-indigo-100: oklch(0.93 0.034 272.788);
    --color-indigo-700: oklch(0.457 0.24 277.023);


    --color-red-100: oklch(0.936 0.032 17.717);
    --color-red-700: oklch(0.505 0.213 27.518);
    --color-red-800: oklch(0.444 0.177 26.899);


    --backdrop-color: rgba(255, 255, 255, 0.1);


    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 0;
    --image-opacity: 100%;
    }

        &, &.dark-mode {
      --color-gray-0: #fff;
    --color-gray-50: oklch(0.985 0.002 247.839);
    --color-gray-100: oklch(0.967 0.003 264.542);
    --color-gray-200: oklch(0.928 0.006 264.531);
    --color-gray-300: oklch(0.872 0.01 258.338);
    --color-gray-400: oklch(0.707 0.022 261.325);
    --color-gray-500: oklch(0.551 0.027 264.364);
    --color-gray-600: oklch(0.446 0.03 256.802);
    --color-gray-700: oklch(0.373 0.034 259.733);
    --color-gray-800: oklch(0.278 0.033 256.848);
    --color-gray-900: oklch(0.21 0.034 264.665);
    --color-gray-950: oklch(0.13 0.028 261.692);


    --color-blue-100: oklch(0.932 0.032 255.585);
    --color-blue-700: oklch(0.488 0.243 264.376);

    --color-green-100: oklch(0.962 0.044 156.743);
    --color-green-700: oklch(0.527 0.154 150.069);

    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;

    --color-yellow-100: oklch(0.973 0.071 103.193);
    --color-yellow-700: oklch(0.554 0.135 66.442);

    --color-indigo-100: oklch(0.93 0.034 272.788);
    --color-indigo-700: oklch(0.457 0.24 277.023);

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;

    }

    --color-yellow-50: oklch(0.987 0.026 102.212);
    --color-yellow-100: oklch(0.973 0.071 103.193);
    --color-yellow-200: oklch(0.945 0.129 101.54);
    --color-yellow-300: oklch(0.905 0.182 98.111);
    --color-yellow-400: oklch(0.852 0.199 91.936);
    --color-yellow-500: oklch(0.795 0.184 86.047);
    --color-yellow-600: oklch(0.681 0.162 75.834);
    --color-yellow-700: oklch(0.554 0.135 66.442);
    --color-yellow-800: oklch(0.476 0.114 61.907);
    --color-yellow-900: oklch(0.421 0.095 57.708);
    --color-yellow-950: oklch(0.286 0.066 53.813);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
}


*,
*::before,
*::after {

    box-sizing: border-box;
    margin: 0;
    padding: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

html {
    font-size: 62.5%;
}

body {
    font-family: "Poppins", "Prompt", sans-serif;
    color: var(--color-gray-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-gray-200);
  color: var(--color-gray-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-yellow-600);
  outline-offset: -1px;
}

/* Parent selector, finally */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyle;
