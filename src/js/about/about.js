import { createElement, h } from "https://unpkg.com/preact?module";
// styles
import ps from "https://unpkg.com/picostyle?module";
// html
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(createElement);
const style = ps(h);
const Text = style("p")({
    color: "red"
});
// Components
export default () => {
    return html `<${Text}>About!</${Text}>`;
};
