import { Kody as BaseKody } from 'basic-kodyfire';
import { Technology } from './technology';
export declare class Kody extends BaseKody {
    constructor(params: any, _schema?: {
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
            tsconfig: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            enum: any[];
                        };
                        outputDir: {
                            type: string;
                        };
                    };
                };
            };
        };
        required: string[];
    }, technology?: Technology);
}
