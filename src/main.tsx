import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from "./redux/Store"
import { AuthContextProvider } from './context/AuthContext/AuthContextProvider'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContextProvider>
          <RouterProvider router={Router} />
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
