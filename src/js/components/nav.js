import { createElement } from "https://unpkg.com/preact?module";
// styles
import css from "https://unpkg.com/csz";
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(createElement);
// routing
import { Link } from "https://unpkg.com/preact-router?module";
// routes
import routes from "../routes.js";
const topnav = css `
background-color: #333;
overflow: hidden;
`;
const a = css `
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
`;
// Components
export default () => {
    return html `<div className=${topnav}>
    ${routes.map(({ path, name }) => {
        return html `<${Link} className=${a} href=${path}>${name}</${Link}>`;
    })}
  </div>`;
};
