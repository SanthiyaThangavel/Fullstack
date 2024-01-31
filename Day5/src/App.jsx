import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import CustomNavbar from "./components/CustomNavbar"
// import CustomSideNav from "./components/CustomSideNav"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { Suspense, lazy } from "react"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Enroll from "./pages/Enroll"
import Adminl from "./pages/Adminl"
const LazyAcademy=lazy(()=>import("./pages/Academy"))
const LazyContact=lazy(()=>import("./pages/Contact"))
const App=()=> {
  const router = createBrowserRouter([
    {
      path:'/home',
      element: <Suspense><Home/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense><LazyAcademy/></Suspense>
    },
    {
      path:'/contact',
      element:<Suspense><LazyContact/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense><Login/></Suspense>
    },
    {
      path:'/enroll',
      element:<Suspense><Enroll/></Suspense>
    },
    {
      path:'/sign',
      element:<Suspense><Signup/></Suspense>
    },
    {
      path:'/dash',
      element:<Suspense><Dashboard/></Suspense>
    },
    {
      path:'/admin',
      element:<Suspense><Adminl/></Suspense>
    }
  ])
  return (
    // <>
    // <CustomNavbar/>
    // <CustomSideNav/>
    // </>
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App
