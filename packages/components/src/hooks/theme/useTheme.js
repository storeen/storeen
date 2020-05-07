import { theming } from '../../theme/theming';

const theme = {
  default: {
    color: theming.colors.gray0,
    backgroundColor: theming.colors.purple700,
    borderColor: theming.colors.purple700,
    hover: {
      color: theming.colors.gray0,
      backgroundColor: theming.colors.purple600,
      borderColor: theming.colors.purple600
    },
    focus: {
      boxShadow: theming.shadows[0],
      borderColor: theming.colors.purple700
    }
  },
  minimal: {
    color: theming.colors.gray900,
    backgroundColor: 'transparent',
    borderColor: theming.colors.gray200,
    hover: {
      color: theming.colors.gray900,
      backgroundColor: theming.colors.gray100,
      borderColor: theming.colors.gray100
    },
    focus: {
      boxShadow: theming.shadows[0],
      borderColor: theming.colors.purple700
    }
  },
  negative: {
    color: theming.colors.gray0,
    backgroundColor: theming.colors.red700,
    borderColor: theming.colors.red700,
    hover: {
      color: theming.colors.gray0,
      backgroundColor: theming.colors.red600,
      borderColor: theming.colors.red600
    },
    focus: {
      boxShadow: theming.shadows[1],
      borderColor: theming.colors.red600
    }
  },
  positive: {
    color: theming.colors.gray0,
    backgroundColor: theming.colors.green700,
    borderColor: theming.colors.green700,
    hover: {
      color: theming.colors.gray0,
      backgroundColor: theming.colors.green600,
      borderColor: theming.colors.green600
    },
    focus: {
      boxShadow: theming.shadows[2],
      borderColor: theming.colors.green600
    }
  }
};

const useTheme = appearance => theme[appearance];

export default useTheme;