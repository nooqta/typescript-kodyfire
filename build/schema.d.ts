export declare const concept: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        template: {
            type: string;
            enum: string[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const _interface: {
    properties: {
        template: {
            enum: string[];
        };
        extends: {
            type: string;
        };
        properties: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        type: string;
                    };
                    optional: {
                        type: string;
                        default: boolean;
                    };
                };
            };
        };
        name: {
            type: string;
        };
        outputDir: {
            type: string;
        };
    };
    type: string;
};
export declare const _class: {
    properties: {
        template: {
            enum: string[];
        };
        extends: {
            type: string;
        };
        implements: {
            type: string;
        };
        hasConstructor: {
            type: string;
            default: boolean;
        };
        args: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        type: string;
                    };
                };
            };
        };
        properties: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        type: string;
                    };
                    optional: {
                        type: string;
                        default: boolean;
                    };
                };
            };
        };
        methods: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    params: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                            };
                        };
                    };
                    returnType: {
                        type: string;
                    };
                };
            };
        };
        name: {
            type: string;
        };
        outputDir: {
            type: string;
        };
    };
    type: string;
};
export declare const conceptArray: (type: any) => {
    type: string;
    items: any;
};
export declare const schema: {
    type: string;
    properties: {
        project: {
            type: string;
        };
        name: {
            type: string;
        };
        rootDir: {
            type: string;
        };
        concept: {
            type: string;
            items: any;
        };
        class: {
            type: string;
            items: any;
        };
        interface: {
            type: string;
            items: any;
        };
    };
    required: string[];
};
