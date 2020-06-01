import { render, createElement } from 'https://unpkg.com/preact?module';
// html
import htm from 'https://unpkg.com/htm?module'
const html = htm.bind(createElement);
// styles
import css from 'https://unpkg.com/csz';
const green = css`color: green;`;
// app
const app = html`<p className=${green}>Hello World</p>`;
// render
render(app, document.body);