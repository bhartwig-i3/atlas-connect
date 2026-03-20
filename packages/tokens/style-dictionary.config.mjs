import StyleDictionary from 'style-dictionary';

// Light mode — semantic tokens applied on :root
const lightSD = new StyleDictionary({
  source: [
    'src/primitives.json',
    'src/semantic.light.json',
  ],
  platforms: {
    web: {
      transformGroup: 'css',
      prefix: 'atlas',
      buildPath: 'build/web/',
      files: [
        {
          destination: 'tokens.light.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
  },
});

// Dark mode — semantic tokens applied under [data-theme="dark"]
const darkSD = new StyleDictionary({
  source: [
    'src/primitives.json',
    'src/semantic.dark.json',
  ],
  platforms: {
    web: {
      transformGroup: 'css',
      prefix: 'atlas',
      buildPath: 'build/web/',
      files: [
        {
          destination: 'tokens.dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"]',
            outputReferences: false,
          },
        },
      ],
    },
  },
});

await lightSD.buildAllPlatforms();
await darkSD.buildAllPlatforms();
