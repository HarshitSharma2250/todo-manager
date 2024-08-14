import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
<ChakraProvider>
  <Provider store={store}>
    <BrowserRouter>
  <App />
    </BrowserRouter>
  </Provider>
</ChakraProvider>

)
