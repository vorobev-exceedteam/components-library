import chroma from 'chroma-js';
import BaseFilledButton from '../components/Base/BaseFilledButton';
import BaseFlatButton from '../components/Base/BaseFlatButton';
import BaseGradientButton from '../components/Base/BaseGradientButton';
import BaseOutlinedButton from '../components/Base/BaseOutlinedButton';
import BaseReliefButton from '../components/Base/BaseReliefButton';
import defaultTheme from './defaultTheme';

class ThemeService {
  static getBaseColors = (
    color = 'primary',
    theme,
    colorVariation = 'main'
  ) => {
    const baseTheme = Object.keys(theme).length ? theme : defaultTheme;
    const baseColor = baseTheme[color]
      ? chroma(baseTheme[color][colorVariation])
      : chroma(color);
    let baseTextColor =
      baseColor.luminance() > 0.7 ? chroma('black') : chroma('white');
    if (baseTheme.text?.light && baseTheme.text?.dark) {
      baseTextColor =
        baseColor.luminance() > 0.7
          ? chroma(baseTheme.text.dark)
          : chroma(baseTheme.text.light);
    }
    return [baseColor, baseTextColor, baseTheme];
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

  static getInputSize = (size) => {
    switch (size) {
      case 'small':
        return {
          padding: '.188rem .857rem',
          lineHeight: '1',
          height: '2.142rem',
          fontSize: '.857rem'
        };
      case 'large':
        return {
          padding: '.75rem 1.143rem',
          lineHeight: '1.25',
          height: '3.2857rem',
          fontSize: '1.143rem'
        };
      default:
        return {
          padding: '.438rem 1rem',
          lineHeight: '1.45',
          height: '2.714rem;',
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

  static getReliefButtonStyle = (color, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainBg: baseColor.hex(),
      hoverBg: baseColor.brighten(0.2).hex(),
      activeBg: baseColor.darken().hex()
    };
  };

  static getGradientButtonStyle = (color, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      mainLightBg: baseColor.brighten().hex(),
      mainDarkBg: baseColor.hex(),
      activeLightBg: baseColor.hex(),
      activeDarkBg: baseColor.darken().hex()
    };
  };

  static getFilledButtonStyle = (color, theme, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      mainText: baseTextColor.hex(),
      main: baseColor.hex(),
      mainBg: baseColor.hex(),
      activeBg: baseColor.darken(0.5).hex()
    };
  };

  static getAlertStyle = (color, colorVariation, theme) => {
    const [baseColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      bg: baseColor.alpha(0.13).css(),
      main: baseColor.hex(),
      boxShadow: baseColor.alpha(0.4).css()
    };
  };

  static getFlatButtonStyle = (color, theme, colorVariation) => {
    const [baseColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      mainBg: baseColor.alpha(0).css(),
      main: baseColor.hex(),
      hoverBg: baseColor.alpha(0.05).css(),
      activeBg: baseColor.alpha(0.15).css()
    };
  };

  // todo manage active state in button itself

  // todo manage light style in badge component

  static getBadgeStyle = (theme, color, colorVariation) => {
    const [baseColor, baseTextColor] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      main: baseColor.hex(),
      bgLight: baseColor.alpha(0.13).css(),
      hoverBg: baseColor.darken(0.5).hex(),
      hoverBgLight: baseColor.alpha(0.2).css(),
      text: baseTextColor.hex(),
    };
  };

  static getInputStyle = (color, colorVariation, theme) => {
    const [baseColor, baseTextColor, baseTheme] = ThemeService.getBaseColors(
      color,
      theme,
      colorVariation
    );
    return {
      bg: baseColor.hex(),
      text: baseTextColor.hex(),
      success: baseTheme.success[colorVariation || 'main'],
      danger: baseTheme.danger[colorVariation || 'main']
    };
  };
}

export default ThemeService;
