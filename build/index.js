"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kody = exports.Tsconfig = exports.Interface = exports.Class = exports.Concept = exports.schema = exports.Technology = void 0;
__exportStar(require("basic-kodyfire"), exports);
var technology_1 = require("./technology");
Object.defineProperty(exports, "Technology", { enumerable: true, get: function () { return technology_1.Technology; } });
var schema_1 = require("./schema");
Object.defineProperty(exports, "schema", { enumerable: true, get: function () { return schema_1.schema; } });
var concept_1 = require("./concept");
Object.defineProperty(exports, "Concept", { enumerable: true, get: function () { return concept_1.Concept; } });
var class_1 = require("./class");
Object.defineProperty(exports, "Class", { enumerable: true, get: function () { return class_1.Class; } });
var interface_1 = require("./interface");
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return interface_1.Interface; } });
var tsconfig_1 = require("./tsconfig");
Object.defineProperty(exports, "Tsconfig", { enumerable: true, get: function () { return tsconfig_1.Tsconfig; } });
var kody_1 = require("./kody");
Object.defineProperty(exports, "Kody", { enumerable: true, get: function () { return kody_1.Kody; } });
//# sourceMappingURL=index.js.map