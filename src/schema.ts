import { getTsConfigNames }  from 'tsconfig-templates'

export const concept = {
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

export const _interface = {
  ...concept,
  properties: {
    ...concept.properties,
    template: {
      enum: ['interface.ts.template'],
    },
    extends: { type: 'string' },
    properties: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string' },
          optional: { type: 'boolean', default: false }
        }
      }
    }
  }
}

export const _class = {
  ...concept,
  properties: {
    ...concept.properties,
    template: {
      enum: ['class.ts.template'],
    },
    extends: { type: 'string' },
    implements: { type: 'string' },
    hasConstructor: { type: 'boolean', default: false },
    args: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string' }
        }
      }
    },
    properties: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string' },
          optional: { type: 'boolean', default: false }
        }
      }
    },
    methods: {
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
      },
  }
}
export const tsconfig = {
  type: 'object',
  properties: {
    name: { enum: getTsConfigNames() },
    outputDir: { type: 'string' },
  },
};

export const conceptArray = (type: any) => ({
  type: 'array',
  items: type,
});
export const tsConfigArray = {
  type: 'array',
  items: tsconfig,
};
export const schema = {
  type: 'object',
  properties: {
    project: { type: 'string' },
    name: { type: 'string' },
    rootDir: { type: 'string' },
    concept: conceptArray(concept),
    class: conceptArray(_class),
    interface: conceptArray(_interface),
    tsconfig: tsConfigArray,

  },
  required: ['name'],
};
