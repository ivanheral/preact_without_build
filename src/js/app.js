import { render, createElement } from "https://unpkg.com/preact?module";
// html
import { default as h } from "https://unpkg.com/htm?module";
const html = h.bind(createElement);

// routing
import { Router } from "https://unpkg.com/preact-router?module";
import AsyncRoute from "https://unpkg.com/preact-async-route?module";
// routes
import routes from "./routes.js";

// page
const view = (props) => {
  const { mod, path } = props;
  const load = (_) => import(`./${mod}.js`).then((m) => m.default);
  return html`<${AsyncRoute} path=${path} getComponent=${load} />`;
};

// components
import Nav from "./nav.js";

// app
const app = html`<${Nav} />
<${Router}>
${routes.map(({path, mod}) => {
  return html`<${view} path=${path} mod=${mod} />`;
})}
</${Router}>`;
// render
render(app, document.body);
