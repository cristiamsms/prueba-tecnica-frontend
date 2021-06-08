"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
const react_1 = require("react");
const useForm = (initialState = {}) => {
    const [value, setvalue] = react_1.useState(initialState);
    const reset = () => {
        setvalue(initialState);
    };
    const handleInputChange = ({ target }) => {
        setvalue(Object.assign(Object.assign({}, value), { [target.name]: target.value }));
    };
    return [value, handleInputChange, reset];
};
exports.useForm = useForm;
//# sourceMappingURL=useForm.js.map