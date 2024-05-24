import './App.css'
import { Routes, Route } from 'react-router-dom'
import OtpScreen from './pages/otp-screen'
function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<OtpScreen />} />
            </Routes>
        </>
    )
}

export default App
