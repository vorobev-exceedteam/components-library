import palette from '../palette';

const outlined = {
  defaultContentColor: palette.text.light.main,
  primary: {
    main: palette.primary.main,
  },
  secondary: {
    main: palette.secondary.main,
  },
  success: {
    main: palette.success.main,
  },
  warning: {
    main: palette.warning.light,
    activeContent: palette.text.dark.main,
  },
  danger: {
    idle: palette.danger.main,
    hover: palette.danger.dark,
    hoverBorder: palette.danger.darker,
    active: palette.danger.darker,
    activeBorder: palette.danger.darkest,
  },
  info: {
    idle: palette.info.main,
    hover: palette.info.dark,
    hoverBorder: palette.info.darker,
    active: palette.info.darker,
    activeBorder: palette.info.darkest,
  },
  dark: {
    idle: palette.dark.light,
    hover: palette.dark.main,
    hoverBorder: palette.dark.main,
    active: palette.dark.lightest,
    activeBorder: palette.dark.lighter,
  },
  light: {
    idle: palette.light.main,
    idleContent: palette.text.dark.main,
    hover: palette.light.darker,
    hoverBorder: palette.light.darkest,
    active: palette.light.dark,
    activeContent: palette.text.dark.light,
    activeBorder: palette.light.darker,
  }
}

export default outlined
