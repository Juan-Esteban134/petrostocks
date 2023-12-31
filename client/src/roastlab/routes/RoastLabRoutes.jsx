import React from 'react'
import { Navbar } from '../components'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Formulario, Mainpage, SearchPages, GraphPage, SellPage, RegisterPage } from '../pages'


export const RoastLabRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="add" element={ <Formulario/> }/>
            <Route path="inicio" element={ <Mainpage/> }/>
            <Route path="search" element={ <SearchPages/> }/>
            <Route path="venta" element={ <SellPage/> }/>
            <Route path="registro" element={ <RegisterPage/> }/>
            <Route path="graphs" element={ <GraphPage/> }/>
            <Route path="/" element={ <Navigate to="/inicio"/> }/>
        </Routes>
    </>
  )
}