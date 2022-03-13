const Colors = {
  primary: '#F4B950',
  dark: '#313132',
  darker: '#00000',
  light: '#fff',
  secondary: {
    red700: '#B1362B',
    red500: '#D96B62',
    red200: '#E08880',
    green700: '#07AB61',
    green500: '#81D963',
    green200: '#98E080',
    yellow700: '#FFC72C',
    yellow500: '#F4B950',
    yellow200: '#FFF082',
    indigo700: '#2938A5',
    indigo500: '#485CC7',
    indigo200: '#8B84D7',
    orange700: '#ED8236',
    orange500: '#FF9448',
    orange200: '#FFA65A',
    blue200: '#5DB9FA',
    blue500: '#5DB9FA',
    blue700: '#5DB9FA',
  },
  extended: {
    gray900: '#1C1C1E',
    gray800: '#3A3A3C',
    gray700: '#58585A',
    gray600: '#767678',
    gray500: '#939396',
    gray400: '#B1B1B4',
    gray300: '#CFCFD2',
    gray200: '#EDEDF0',
    gray100: '#F7F7FA',
  },
}

export default {
  colors: {
    ...Colors,
  },
  background: {
    ...Colors,
  },
  fonts: ["'Graphik-Semibold', 'sans-serif'", "'Graphik-Regular', 'sans-serif'"],
  sizes: ['58rem', '70rem', '80rem', '96rem', '1140px'],
  breakpoints: ['40em', '52em', '64em', '80em'],
  space: ['0', 
    '0.4rem',  // 0 
    '0.8rem',  // 1
    '1.6rem',  // 2
    '2.4rem',  // 3
    '3.2rem',  // 4
    '6.4rem',  // 5
    '9.6rem',  // 6
    '12.8rem', // 7
    '25.6rem', // 8
    '51.2rem', // 9
  ], 
  fontSizes: [
    '1.1rem', //0
    '1.2rem', //1
    '1.4rem', //2
    '1.5rem', //3
    '1.8rem', //4
    '2.0rem', //5
    '2.2rem', //6
    '3.5rem', //7
    '4.8rem', //8
    '5.8rem', //9
  ],
  lineHeights: [
    '1.15', 
    '1.2', 
    '1.3', 
    '1.40',
    '1.45'
  ],
  radii: ['20px'],
}