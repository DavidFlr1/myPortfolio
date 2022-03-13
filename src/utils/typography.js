import Typography from 'typography'
import theme from './theme'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  headerWeight: 700,
  bodyWeight: 500,
  boldWeight: 700,
  headerFontFamily: ['Graphik-SemiBold', 'sans-serif'],
  bodyFontFamily: ['Graphik-Regular', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    body: {
      fontSize: '16px',
    },
    h1: {
      fontSize: '58px',
      lineHeight: 1.14,
      color: theme.colors.light,
    },
    h2: {
      fontSize: '48px',
      lineHeight: 1.2,
      color: theme.colors.light,
    },
    h3: {
      fontSize: '35px',
      lineHeight: 1.2,
      color: theme.colors.light,
    },
    h4: {
      fontSize: '28px',
      lineHeight: 1.2,
      color: theme.colors.light,
    },
    'h5, h6': {
      fontSize: '22px',
      lineHeight: 1.2,
      color: theme.colors.light,
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.46,
      color: theme.colors.light,
    },
  }),
})

export default typography
