import { createElement, h } from "https://unpkg.com/preact?module";
// styles
import css from "https://unpkg.com/csz";
import ps from "https://unpkg.com/picostyle?module";
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(createElement);
const style = ps(h);
const Nav = style("div")({
    backgroundColor: "#333",
    overflow: "hidden"
});
// routing
import { Link } from "https://unpkg.com/preact-router?module";
// routes
import routes from "../routes.js";
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
    return html `<${Nav}>
    ${routes.map(({ path, name }) => {
        return html `<${Link} className=${a} href=${path}>${name}</${Link}>`;
    })}
  </${Nav}>`;
};
