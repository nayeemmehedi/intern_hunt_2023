import React from 'react'
import Navbar from './features/Navbar'
import WholeWorld from './features/HoleWorld'
import PopularIntern from './features/PopularIntern'
import StudentAndCompany from './features/Student&Company'

function HomeCmp() {
  return (
    <div>
        <Navbar></Navbar>
        <WholeWorld></WholeWorld>
        <PopularIntern></PopularIntern>
        <StudentAndCompany></StudentAndCompany>
    </div>
  )
}

export default HomeCmp