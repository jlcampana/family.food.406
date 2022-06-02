// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './app'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)