"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.conceptArray = exports._class = exports._interface = exports.concept = void 0;
exports.concept = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        template: {
            type: 'string',
            enum: ['sample.html.template'],
        },
        outputDir: { type: 'string' },
    },
};
exports._interface = Object.assign(Object.assign({}, exports.concept), { properties: Object.assign(Object.assign({}, exports.concept.properties), { template: {
            enum: ['interface.ts.template'],
        }, extends: { type: 'string' }, properties: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    type: { type: 'string' },
                    optional: { type: 'boolean', default: false }
                }
            }
        } }) });
exports._class = Object.assign(Object.assign({}, exports.concept), { properties: Object.assign(Object.assign({}, exports.concept.properties), { template: {
            enum: ['class.ts.template'],
        }, extends: { type: 'string' }, implements: { type: 'string' }, hasConstructor: { type: 'boolean', default: false }, args: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    type: { type: 'string' }
                }
            }
        }, properties: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    type: { type: 'string' },
                    optional: { type: 'boolean', default: false }
                }
            }
        }, methods: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    params: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                type: { type: 'string' }
                            }
                        }
                    },
                    returnType: { type: 'string' },
                }
            }
        } }) });
const conceptArray = (type) => ({
    type: 'array',
    items: type,
});
exports.conceptArray = conceptArray;
exports.schema = {
    type: 'object',
    properties: {
        project: { type: 'string' },
        name: { type: 'string' },
        rootDir: { type: 'string' },
        concept: (0, exports.conceptArray)(exports.concept),
        class: (0, exports.conceptArray)(exports._class),
        interface: (0, exports.conceptArray)(exports._interface),
    },
    required: ['name'],
};
//# sourceMappingURL=schema.js.map