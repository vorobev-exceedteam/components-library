const getRoundButtonColors = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return {
        idle: theme.primary,
        active: theme.primary,
        hover: theme.primary
      }
  }
}

export default getButtonVariantColors
