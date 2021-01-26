import palette from '../palette';

const round = {
  defaultContentColor: palette.text.light.main,
  primary: {
    idle: palette.primary.main,
    hover: palette.primary.dark,
    hoverBorder: palette.primary.dark,
    active: palette.primary.darker,
    activeBorder: palette.primary.darker,
  },
  secondary: {
    idle: palette.secondary.main,
    hover: palette.secondary.dark,
    hoverBorder: palette.secondary.dark,
    active: palette.secondary.darker,
    activeBorder: palette.secondary.darker,
  },
  success: {
    idle: palette.success.main,
    hover: palette.success.dark,
    hoverBorder: palette.success.darker,
    active: palette.success.darker,
    activeBorder: palette.success.darkest,
  },
  warning: {
    idle: palette.warning.main,
    hover: palette.warning.light,
    hoverBorder: palette.warning.lighter,
    active: palette.warning.lighter,
    activeContent: palette.text.dark.main,
    activeBorder: palette.warning.lightest,
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

export default round
