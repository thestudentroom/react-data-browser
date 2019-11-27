"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectPropertyByString = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};
exports.arrayHasArrays = (array) => {
    return array.map(item => Array.isArray(item)).includes(true);
};
