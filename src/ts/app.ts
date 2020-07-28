import { render, createElement } from "https://unpkg.com/preact?module";
// html
import { default as h } from "https://unpkg.com/htm?module";
const html = h.bind(createElement);

// routing
import { Router } from "https://unpkg.com/preact-router?module";
import AsyncRoute from "https://unpkg.com/preact-async-route?module";
// routes
import routes from "./routes.js";
interface iProps {
mod: string;
path: string;
}


// page
const view = (props: iProps) => {
  const { mod, path } = props;
  const load = (_: any) => import(`./${mod}.js`).then((m) => m.default);
  return html`<${AsyncRoute} path=${path} getComponent=${load} />`;
};

// components
import Nav from "./components/nav.js";

// app
const app = html`<${Nav} />
<${Router}>
${routes.map(({path, mod}) => {
  return html`<${view} path=${path} mod=${mod} />`;
})}
</${Router}>`;
// render
render(app, document.body);
