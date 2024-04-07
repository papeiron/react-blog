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
      --color-green-400: #1bb76e;
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

      --color-orange-400: #ef5b2a;

      --color-bg: #e5ded8;

      --color-text: #4b5563;

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;

    --border-radius-lg: 9px;
    --border-radius-xlg: 20px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
    background: var(--color-grey-300);
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

  textarea {
    resize: none;
  }

  // react tags

  .react-tags {
    width: 50% !important;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .react-tags__combobox {
      &::after {
        content: 'Added Tags';
        position: relative;
        font-weight: 500;
      }

      .react-tags__combobox-input {
        border: 1px solid var(--color-grey-300);
        background-color: var(--color-grey-0);
        border-radius: var(--border-radius-sm);
        padding: 0.8rem;
        width: 100% !important;
        margin-bottom: 2.25rem;

        &:focus {
          outline: none;
        }
      }
    }

    .react-tags__list {
      display: flex;
      column-gap: 1rem;
      row-gap: 0.5rem;
      flex-wrap: wrap;
      order: 1;
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

  // tippy
  .tippy-box[data-theme~='slashmenu-popup'] {
    position: static;
    background-color: inherit;
    .tippy-content {
      padding: 0;
    }
  }

  .tippy-box[data-theme~='bubblemenu-popup'] {
    background-color: inherit;
    .tippy-content {
      /* box-shadow: var(--shadow-lg); */
    }
  }

  // mui popover
  .MuiPopover-paper {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  }

  // editor

  .ProseMirror {
    max-width: 100%;
    height: 100%;
    outline: none;
    background-color: inherit;

    & p {
      line-height: 2;
    }

    & p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #b1b0ad;
      pointer-events: none;
      height: 0;
    }

    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
      list-style: disc;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #f7f6f3;
      color: #702626;
      font-family: 'JetBrainsMono', monospace;
      padding: 2rem 2.5rem;
      border-radius: 0.5rem;

      code {
        padding: 0;
        background: none;
        font-size: 1.2rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: var(--border-radius-lg);
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid var(--color-grey-700);
    }

    hr {
      border: none;
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 2rem 0;
    }
  }
`;

export default GlobalStyles;
