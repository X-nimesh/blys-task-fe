import './App.css'
import { Routes, Route } from 'react-router-dom'
import OtpScreen from './pages/otp-screen'
import SuccessPage from './pages/successPage'
import { Image } from '@chakra-ui/react'
function App() {

    return (
        <>
            <Image src='/blys.png' width={'100px'} position={'fixed'} left={10} top={'5'} />
            <Routes>
                <Route path="/" element={<OtpScreen />} />
                <Route path="/success" element={<SuccessPage />} />

            </Routes>
        </>
    )
}

export default App
