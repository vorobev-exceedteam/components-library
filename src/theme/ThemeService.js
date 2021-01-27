import Color from 'color';
import defaultTheme from './defaultTheme';

class ThemeService {
  static getBaseAttributes = (color, theme, colorVariation) => {
    const variation = colorVariation ? colorVariation : 'main';
    const baseTheme = theme[color] ? theme : defaultTheme;
    const baseColor =
      baseTheme[color] && baseTheme[color][variation]
        ? new Color(baseTheme[color][variation])
        : new Color(color);
    // todo make dependent on bg
    const baseTextColor =
      baseTheme.text && baseTheme.text.light
        ? new Color(baseTheme.text.light)
        : new Color(color);

    return [baseColor, baseTextColor];
  };

  static getButtonSize = (size) => {
    switch (size) {
      case 'small':
        return {
          padding: '.486rem 1rem',
          lineHeight: '1',
          fontSize: '.9rem'
        }
      case 'large':
        return {
          padding: '.8rem 2rem',
          lineHeight: '1.25',
          fontSize: '1.25rem'
        }
      default:
        return {
          padding: '.786rem 1.5rem',
          lineHeight: '1',
          fontSize: '1rem'
        }
    }
  }

  static getReliefButtonStyle = (color, active, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainBg: active ? baseColor.darken(0.2).hex() : baseColor.hex(),
      hoverBg: baseColor.lighten(0.05).hex(),
      activeBg: baseColor.darken(0.2).hex(),
    }
  };

  static getGradientButtonStyle = (color, active, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainLightBg: active ? baseColor.hex() : baseColor.lighten(0.2).hex(),
      mainDarkBg: active ? baseColor.darken(0.2).hex() : baseColor.hex(),
      activeLightBg: baseColor.hex(),
      activeDarkBg: baseColor.darken(0.2).hex()
    };
  };

  static getFilledButtonStyle = (color, active, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainBg: active ? baseColor.darken(0.1).hex() : baseColor.hex(),
      activeBg: baseColor.darken(0.1).hex()
    };
  };

  static getOutlinedButtonStyle = (color, active, theme, colorVariation) => {
    const [baseColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      mainBg: active
        ? baseColor.alpha(0.15).rgb().string()
        : baseColor.alpha(0).rgb().string(),
      main: baseColor.hex(),
      hoverBg: active
        ? baseColor.alpha(0.15).rgb().string()
        : baseColor.alpha(0.05).rgb().string(),
      activeBg: baseColor.alpha(0.15).rgb().string()
    };
  };
}

export default ThemeService;
