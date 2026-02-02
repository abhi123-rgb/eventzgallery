import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div className='min-h-screen bg-[#0a0a0b]'>
            <Hero />
            <WhatWeDo />
            <Testimonials />
        </div>
    )
}

export default Home