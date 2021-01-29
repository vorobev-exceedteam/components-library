import Color from 'color';
import BaseFilledButton from '../components/Base/BaseFilledButton';
import BaseFlatButton from '../components/Base/BaseFlatButton';
import BaseGradientButton from '../components/Base/BaseGradientButton';
import BaseOutlinedButton from '../components/Base/BaseOutlinedButton';
import BaseReliefButton from '../components/Base/BaseReliefButton';
import defaultTheme from './defaultTheme';

class ThemeService {
  static getBaseAttributes = (color, theme, colorVariation) => {
    const variation = colorVariation ? colorVariation : 'main';
    const baseTheme = theme[color] ? theme : defaultTheme;
    const baseColor =
      baseTheme[color] && baseTheme[color][variation]
        ? new Color(baseTheme[color][variation])
        : new Color(color);
    let baseTextColor =
      baseColor.luminosity() > 0.7 ? new Color('black') : new Color('white');
    if (baseTheme.text && baseTheme.text.light && baseTheme.text.dark) {
      baseTextColor =
        baseColor.luminosity() > 0.7
          ? new Color(baseTheme.text.dark)
          : new Color(baseTheme.text.light);
    }

    return [baseColor, baseTextColor];
  };

  static getRippleOptions = (variant, ref) => {
    const options = {};

    if (['gradient, relief'].includes(variant)) {
      options.disabled = true;
    }
    const color = new Color(ref.current.style.color);
    options.rippleColor = color.alpha(0.3).rgb().string();
    return options;
  };

  static getButtonVariant = (variant) => {
    switch (variant) {
      case 'flat':
        return BaseFlatButton;
      case 'outlined':
        return BaseOutlinedButton;
      case 'relief':
        return BaseReliefButton;
      case 'gradient':
        return BaseGradientButton;
      default:
        return BaseFilledButton;
    }
  };

  static getIconButtonSize = (size) => {
    switch (size) {
      case 'small':
        return {
          padding: '.486rem',
          lineHeight: '1',
          fontSize: '.9rem'
        };
      case 'large':
        return {
          padding: '.8rem',
          lineHeight: '1.25',
          fontSize: '1.25rem'
        };
      default:
        return {
          padding: '.786rem',
          lineHeight: '1',
          fontSize: '1rem'
        };
    }
  };

  static getButtonSize = (size) => {
    switch (size) {
      case 'small':
        return {
          padding: '.486rem 1rem',
          lineHeight: '1',
          fontSize: '.9rem'
        };
      case 'large':
        return {
          padding: '.8rem 2rem',
          lineHeight: '1.25',
          fontSize: '1.25rem'
        };
      default:
        return {
          padding: '.786rem 1.5rem',
          lineHeight: '1',
          fontSize: '1rem'
        };
    }
  };

  static getReliefButtonStyle = (color, active, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainBg: active ? baseColor.darken(0.1).hex() : baseColor.hex(),
      hoverBg: baseColor.lighten(0.05).hex(),
      activeBg: baseColor.darken(0.1).hex()
    };
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
      main: baseColor.hex(),
      mainBg: active ? baseColor.darken(0.1).hex() : baseColor.hex(),
      activeBg: baseColor.darken(0.1).hex()
    };
  };

  static getFlatButtonStyle = (color, active, theme, colorVariation) => {
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

  static getBadgeStyle = (theme, color, colorVariation, light) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseAttributes(
      color,
      theme,
      colorVariation
    );
    return {
      bg: light ? baseColor.alpha(0.13).rgb().string() : baseColor.hex(),
      text: light ? baseColor.hex() : baseTextColor.hex(),
      boxShadow: baseColor.hex()
    };
  };
}

export default ThemeService;
