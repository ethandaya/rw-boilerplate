import React from 'react'
import { render } from 'react-dom'
import { Provider } from './store'
import Root from './views/Root'

render(
  <Provider>
    <Root />
  </Provider>,
  document.getElementById('root'),
)
