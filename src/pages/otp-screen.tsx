import React from 'react'
import Otp from '../components/otp-input-field'

const OtpScreen = () => {
    return (
        <>otp-screen
            <Otp length={6} onSubmit={() => {
                console.log('otp submitted')
            }} />
        </>
    )
}

export default OtpScreen
