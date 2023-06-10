import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { RoastLabRoutes } from "../roastlab/routes/RoastLabRoutes"


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="Login" element={ <LoginPage /> }/>
        <Route path="/*" element={ <RoastLabRoutes /> }/>
    </Routes>
    </>
  )
}
