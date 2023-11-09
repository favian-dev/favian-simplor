Install the package with the command below.

```shell
npm i @favian/simplor
```

Add the following content to `angular.json` to conveniently import Favian Simplor's style.

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "node_modules/@favian/simplor/styles"
  ]
},
```

Import Favian Simplor's style files into the root `styles.scss` file.

```scss
// Import the default font used in Favian Simplor and declare css variables.
@import "init";

// A stylesheet where classes for Favian Simplor's components are declared.
@import "styles";

// Mixins declared in `init.scss` declare non-static, configurable CSS variables.
// These are all required.
@include colors();
@include durations();
@include font-sizes();
```

`colors()`, `durations()`, and `font-sizes()` have the following default values, 
and you can change the value of the desired property as needed.

```scss
@include colors((
  primary: #006AE5, // Primary color.
  secondary: #373538, // Secondary color.
  tertiary: #0D6986, // Tertiary color.
  warn: #FFC42C, // Warning color.
  error: #E51C00, // Error color.
  success: #19CF57, // Success color.
  light-background: #fff, // Background for light theme.
  light-foreground: #333, // Foreground for light theme.
  dark-background: #444, // Background for dark theme.
  dark-foreground: #ccc, // Foreground for dark theme.
));

@include durations((
  very-slow: 1.5s,
  slow: 1s,
  normal: .5s,
  fast: .3s,
  very-fast: .15s,
));

@include font-sizes((
  xs: 12px,
  s: 14px,
  m: 16px,
  l: 18px,
  xl: 20px,
));
```
