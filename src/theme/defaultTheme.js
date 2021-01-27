const defaultTheme = {
  primary: {
    light: '#9e95f5',
    main: '#7367f0',
    dark: '#0f3d64'
  },
  secondary: {
    light: '#9ca0a4',
    main: '#82868b',
    dark: '#696d71'
  },
  success: {
    light: '#48da89',
    main: '#28c76f',
    dark: '#1f9d57'
  },
  danger: {
    light: '#f08182',
    main: '#ea5455',
    dark: '#e42728'
  },
  warning: {
    light: '#ffb976',
    main: '#ff9f43',
    dark: '#ff8510'
  },
  info: {
    light: '#1ce7ff',
    main: '#00cfe8',
    dark: '#00a1b5'
  },
  dark: {
    light: '#626262',
    main: '#4b4b4b',
    dark: '#1e1e1e',
  },
  text: {
    dark: '#5e5873',
    light: '#fff'
  }
};

// create gradient variation
for (let color in defaultTheme) {
  switch (color) {
    case 'dark':
      defaultTheme[color].gradient =
        `linear-gradient(47deg, ` +
        `${defaultTheme[color].dark}, ${defaultTheme[color].main}`;
      break;
    default:
      defaultTheme[color].gradient =
        `linear-gradient(47deg, ` +
        `${defaultTheme[color].main}, ${defaultTheme[color].light}`;
      break;
  }
}

export default defaultTheme;
