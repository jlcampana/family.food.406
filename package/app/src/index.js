import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './main.css'
import App from './app'

ReactDOM.render(<ChakraProvider>
  <App />
</ChakraProvider>,
  document.getElementById('root')
);
