import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  :root {
    &,
    &.light-mode {
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;

      --color-grey-1000: #999999;

      --color-blue-100: #e0f2fe;
      --color-blue-700: #0369a1;
      --color-green-100: #dcfce7;
      --color-green-400: #34d399;
      --color-green-700: #15803d;
      --color-yellow-100: #fef9c3;
      --color-yellow-700: #a16207;
      --color-silver-100: #e5e7eb;
      --color-silver-700: #374151;
      --color-indigo-100: #e0e7ff;
      --color-indigo-700: #4338ca;

      --color-red-100: #fee2e2;
      --color-red-300: #ca7474;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;

      --color-bg: #e5ded8;

      --color-text: #4b5563;

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    }

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;

    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-grey-600);

    min-height: 100vh;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  // scrollbar

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-0);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-200);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  /* Parent selector */
  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  // react tags

  .react-tags {
    width: 50% !important;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .react-tags__combobox {
      .react-tags__combobox-input {
        border: 1px solid var(--color-grey-300);
        background-color: var(--color-grey-0);
        border-radius: var(--border-radius-sm);
        padding: 0.8rem;
        width: 100% !important;
        /* margin-top: 2rem; */

        &:focus {
          outline: none;
        }
      }
    }

    .react-tags__list {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .react-tags__tag {
      display: inline-block;
      gap: 1rem;
      position: relative;
      overflow: hidden;

      border: 0.5px solid;
      border-radius: var(--border-radius-tiny);

      padding: 0 1rem 0 1rem;

      color: var(--color-grey-1000);

      font-size: 1.3rem;
      background-color: inherit;
      text-transform: uppercase;

      cursor: pointer;
    }

    .react-tags__listbox {
      position: absolute;
      z-index: 2;
      width: 47.5%;
      max-height: 30rem;
      overflow: scroll;
      border: 1px solid var(--color-grey-300);
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-sm);

      .react-tags__listbox-option {
        border: 1px solid var(--color-grey-300);
        background-color: var(--color-grey-0);
        cursor: pointer;
        padding: 0.7rem 1rem;
      }
    }
  }
`;

export default GlobalStyles;
