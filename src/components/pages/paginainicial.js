import React from 'react'

import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'


 function paginainicial () {
     return(
         <>
            <HeroSection />
            <Cards />
            <Footer/>
         </>
     );
 }

 export default paginainicial;