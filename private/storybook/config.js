// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'components/themes/default'

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addParameters({
  viewport: { viewports: newViewports },
})

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </BrowserRouter>
))

configure(loadStories, module)
