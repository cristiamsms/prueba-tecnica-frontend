"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./style.css");
function Carts({ price, list, description, title }) {
    return (react_1.default.createElement("div", { className: "cart" },
        react_1.default.createElement("h3", null, title),
        react_1.default.createElement("h5", null, description),
        react_1.default.createElement("h1", null,
            "$",
            price,
            " ",
            react_1.default.createElement("span", null, "usd")),
        react_1.default.createElement("div", { className: "cart-body" },
            react_1.default.createElement("h5", null, "Tu diagnostico incluye: "),
            react_1.default.createElement("ul", null, list.map((element) => element && react_1.default.createElement("li", null,
                "\u2714 ",
                element))),
            react_1.default.createElement("button", null, "Quiero empezar "))));
}
exports.default = Carts;
//# sourceMappingURL=index.js.map