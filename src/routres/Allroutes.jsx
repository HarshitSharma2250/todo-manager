import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DeleteHistory } from '../components/DeleteHistory'

export const Allroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/history' element={<DeleteHistory/>}/>
   </Routes>
  )
}
