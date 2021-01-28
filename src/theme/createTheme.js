import defaultTheme from './defaultTheme';

const createTheme = (theme) => {
  const customTheme = {};

  for (let key in Object.keys(defaultTheme)) {
    customTheme[key] = {
      ...defaultTheme[key],
      ...theme[key]
    };

  }

  return {
    ...customTheme,
    ...theme,
  }
};

export default createTheme;
