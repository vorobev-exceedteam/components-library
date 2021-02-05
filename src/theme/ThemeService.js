import chroma from 'chroma-js';
import defaultTheme from './defaultTheme';

class ThemeService {
  static getBaseColors = (color = 'primary', theme) => {
    const baseTheme = Object.keys(theme).length ? theme : defaultTheme;
    const baseColor = baseTheme[color]
      ? chroma(baseTheme[color])
      : chroma(color);
    let baseTextColor =
      baseColor.luminance() > 0.7 ? chroma('black') : chroma('white');
    if (baseTheme.text?.light && baseTheme.text?.dark) {
      baseTextColor =
        baseColor.luminance() > 0.7
          ? chroma(baseTheme.text.dark)
          : chroma(baseTheme.text.light);
    }
    return {baseColor, baseTextColor, baseTheme};
  };

  static getTypographyColors = (color, theme) => {
    const baseTheme = Object.keys(theme).length ? theme : defaultTheme;
    const baseColor = color
      ? baseTheme[color]
        ? chroma(baseTheme[color])
        : chroma(color)
      : chroma(baseTheme.text.dark);
    return {baseColor, baseTheme};
  };

  static getRippleOptions = (variant, ref) => {
    const options = {};

    if (['gradient, relief'].includes(variant)) {
      options.disabled = true;
    }
    const color = chroma(ref.current.style.color);
    options.rippleColor = color.alpha(0.15).css();
    return options;
  };


}

export default ThemeService;
