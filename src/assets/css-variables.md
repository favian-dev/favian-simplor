The CSS variables declared when importing `init.scss` are as follows.

- `--border-color`: Default border color for Simplor components. Use a `--foreground` color with opacity `0.15`.
- `--focus-border-color`: The focused border color of the Simplor component. Uses a `--primary` color of opacity `1`.
- `--focus-background-color`: The focused background color of the Simplor component. Use a `--primary` color with opacity `0.05`.
- `--error-border-color`: Border color when the Simplor component is in error state. Uses an `--error` color of opacity `1`.
- `--error-background-color`: Background color when the Simplor component is in error state. Use the `--error` color with opacity `0.05`.
- `--placeholder-color`: The color of the placeholder in the Simplor component. Use `--contrast` color with opacity `0.5`.
- `--disabled-background-color`: Disabled background color of the Simplor component. Use `--contrast` color with opacity `0.05`.
- `--space-xs`: This is the smallest space between elements. The default is `4px`.
- `--space-s`: This is a small space between elements. The default is `8px`.
- `--space-m`: This is the basic space between elements. The default is `16px`.
- `--space-l`: This is a large space between elements. The default is `24px`.
- `--space-xl`: This is the largest space between elements. The default is `32px`.
- `--control-height-xs`: This is the smallest height that can be used for a control component. The default is `32px`.
- `--control-height-s`: This is a small height that can be used for a control component. The default is `40px`.
- `--control-height-m`: This is the default height that can be used for a control component. The default is `48px`.
- `--control-height-l`: This is a large height that can be used for a control component. The default is `56px`.
- `--control-height-lx`: This is the largest height that can be used for a control component. The default is `64px`.

CSS variables declared through the `colors()` mixin are as follows.

The `${opacity}` has 3, 5, and increments of 5 up to 100, indicating opacity from 0.03 to 1.

- `--primary-${opacity}`: Primary color of Simplor component. Uses the value of the `primary` property given in the `colors()` mixin. The default is `#006AE5`.
- `--primary-contrast-${opacity}`: A contrasting color to the primary color. Depending on the brightness of the primary color, it is determined to be white or black.
- `--secondary-${opacity}`: Secondary color of Simplor component. Uses the value of the `secondary` property given in the `colors()` mixin. The default is `#373538`.
- `--secondary-contrast-${opacity}`: A contrasting color to the secondary color. Depending on the brightness of the secondary color, it is determined to be white or black.
- `--tertiary-${opacity}`: Tertiary color of Simplor component. Uses the value of the `tertiary` property given in the `colors()` mixin. The default is `#0D6986`.
- `--tertiary-contrast-${opacity}`: A contrasting color to the tertiary color. Depending on the brightness of the tertiary color, it is determined to be white or black.
- `--warn-${opacity}`: Warn color of Simplor component. Uses the value of the `warn` property given in the `colors()` mixin. The default is `#FFC42C`.
- `--warn-contrast-${opacity}`: A contrasting color to the warn color. Depending on the brightness of the warn color, it is determined to be white or black.
- `--error-${opacity}`: Error color of Simplor component. Uses the value of the `error` property given in the `colors()` mixin. The default is `#E51C00`.
- `--error-contrast-${opacity}`: A contrasting color to the error color. Depending on the brightness of the error color, it is determined to be white or black.
- `--success-${opacity}`: Success color of Simplor component. Uses the value of the `success` property given in the `colors()` mixin. The default is `#19CF57`.
- `--success-contrast-${opacity}`: A contrasting color to the success color. Depending on the brightness of the success color, it is determined to be white or black.
- `--light-background-${opacity}`: The background color of the light theme. Uses the value of the `light-background` property given in the `colors()` mixin. The default is white.
- `--light-foreground-${opacity}`: The foreground color of the light theme. Uses the value of the `light-foreground` property given in the `colors()` mixin. The default is `#333`.
- `--dark-background-${opacity}`: The background color of the dark theme. Uses the value of the `dark-background` property given in the `colors()` mixin. The default is `#444`.
- `--dark-foreground-${opacity}`: The foreground color of the dark theme. Uses the value of the `dark-foreground` property given in the `colors()` mixin. The default is `#ccc`.
- `--black-${opacity}`: It's black.
- `--white-${opacity}`: It's white.
- `--background-${opacity}`: The background color matches the current theme. For light themes, use `--light-background-${opacity}`, and for dark themes, use `--dark-background-${opacity}`.
- `--foreground-${opacity}`: The foreground color matches the current theme. For light themes, use `--light-foreground-${opacity}`, and for dark themes, use `--dark-foreground-${opacity}`.
- `--contrast-${opacity}`: A contrasting color to the current theme. Use black for a light theme, and use white for a dark theme.

CSS variables declared through the `durations()` mixin are as follows.

- `--duration-very-slow`: This is the slowest duration. The default is `1.5s`.
- `--duration-slow`: This is a slow duration. The default is `1s`.
- `--duration-normal`: This is the default duration. The default is `0.5s`.
- `--duration-fast`: This is a fast duration. The default is `0.5s`.
- `--duration-very-fast`: This is the fastest duration. The default is `0.15s`.

CSS variables declared through the `font-sizes()` mixin are as follows.

- `--font-size-xs`: This is the smallest font-size. The default is `12px`.
- `--font-size-s`: This is a small font-size. The default is `14px`.
- `--font-size-m`: This is the default font-size. The default is `16px`.
- `--font-size-l`: This is a large font-size. The default is `18px`.
- `--font-size-xl`: This is the largest font-size. The default is `20px`.
