// router.tsx
import { createBrowserRouter } from 'react-router-dom'
// import HomePage from '~/pages/Customer/HomePage'
import HomePage from '~/pages/Customer/HomePage/HomePage'
import { BrowserRouter } from "react-router"
import LoginPage from '~/pages/Customer/LoginPage/LoginPage'
import RegisterPage from '~/pages/Customer/RegisterPage/RegisterPage'
import ManagementUser from '~/pages/Admin/ManagementUser/ManagementUser'
import EditUser from '~/components/UserManagement/EditUser'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/customer/login',
    element: <LoginPage />
  },
  {
    path: '/customer/register',
    element: <RegisterPage />
  },
  {
    path:'/admin/user-management',
    element: <ManagementUser />
  },
  {
    path: "/users/edit/:id",
    element: <EditUser />
  }
])

