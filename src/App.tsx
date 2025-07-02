
// Note: The BrowserRouter import is not used in this file, as the RouterProvider will
import { RouterProvider } from 'react-router-dom'
import { router } from './router' // Adjust the import path as necessary
import React from 'react'

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
