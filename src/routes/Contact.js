import React from 'react'
import Form from '../components/Form'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
            <Form />
        </div>
    )
}

export default Contact