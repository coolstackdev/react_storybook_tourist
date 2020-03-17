import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#472F12', '#FFA840', '#FAE3C7', '#FBF2E7'],
  secondary: ['#124C47', '#375E5A', '#03C8A8', '#ACF4E9', '#E8F6F5'],
  tertiary: ['#55272D', '#EB6D7F', '#F1C7CD', '#FAF2F3'],
  danger: ['#F02240'],
  grayscale: [
    '#212121',
    '#464646',
    '#6B6B6B',
    '#979797',
    '#D2D2D2',
    '#D8D8D8',
    '#EEEEEE',
    '#FCFCFC',
    '#FEFEFE',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Avenir, Helvetica Neue, Helvetica, Roboto, sans-serif',
  primaryBook: 'AvenirBook, Helvetica Neue, Helvetica, Roboto, sans-serif',
  primaryRoman: 'AvenirRoman, Helvetica Neue, Helvetica, Roboto, sans-serif',
  cursive: 'Gloria Hallelujah, cursive',
}

theme.sizes = {
  maxWidth: '1400px',
}

export default theme
