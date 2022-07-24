"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tsconfig = void 0;
const tsconfig_templates_1 = require("tsconfig-templates");
const basic_kodyfire_1 = require("basic-kodyfire");
const engine_1 = require("./engine");
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
class Tsconfig extends basic_kodyfire_1.Concept {
    constructor(concept, technology) {
        super(concept, technology);
        this.engine = new engine_1.Engine();
    }
    generate(_data) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = (0, tsconfig_templates_1.getTsConfigs)().find((file) => file.name === _data.name);
            if (!file)
                throw new Error(`No tsconfig file found for ${_data.name}`);
            const outputDir = (0, path_1.join)(this.technology.rootDir, this.outputDir, _data.outputDir);
            // We need to create the directory if it doesn't exist
            yield fs_1.default.promises.mkdir(outputDir, { recursive: true });
            if (!fs_1.default.existsSync((0, path_1.join)(outputDir, `tsconfig.json`))) {
                (0, tsconfig_templates_1.copyTsConfigFile)(file.filename, outputDir);
            }
            else {
                console.log(`tsconfig.json already exists in ${outputDir}`);
            }
        });
    }
}
exports.Tsconfig = Tsconfig;
//# sourceMappingURL=tsconfig.js.map