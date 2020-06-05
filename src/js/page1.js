import { createElement } from "https://unpkg.com/preact?module";
// styles
import css from "https://unpkg.com/csz";
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(createElement);
const green = css`
  color: green;
`;

// Components
export default () => {
  return html`<p className=${green}>Home</p>`;
};
