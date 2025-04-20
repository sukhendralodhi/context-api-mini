import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import ProfileCard from './theme-context/components/ProfileCard.jsx'
import ThemeContextProvider from './theme-context/context/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        {/* <RouterProvider router={router}> */}
          <ProfileCard />
        {/* </RouterProvider> */}
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
