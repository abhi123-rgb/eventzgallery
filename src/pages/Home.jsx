import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import Contact from './Contact'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'

const Home = () => {
    return (
        <div className='min-h-screen bg-neutral-950'>
            {/* Home Section */ }
            <section id="home" className='min-h-screen'>
                <Hero />
            </section>

            {/* About Us Section */ }
            <section id="aboutus">
                <AboutUs />
            </section>

            {/* Services Section */ }
            <section id="services">
                <WhatWeDo />
            </section>

            {/* Contact Section */ }
            <section id="contact">
                <Contact />
            </section>

            <Testimonials />

            {/* FAQ Section */ }
            <section id="faq">
                <FAQ />
            </section>
        </div>
    )
}

export default Home