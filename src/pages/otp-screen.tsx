import Otp from '../components/otp-input-field'
import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react'
import otpImage from '../assets/otpLogo.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React from 'react';
const OtpScreen = () => {
    console.log(import.meta.env.VITE_APP_API_URL);
    const navigate = useNavigate();

    const toast = useToast()
    const [otpValue, setotpValue] = useState('');
    const handleSubmit = async () => {
        // from env
        await axios.post(`${process.env.REACT_APP_API_KEY || 'http://localhost:3000'}/api/verification-code`, { code: otpValue })
            .then(() => {
                navigate('/success');
            })
            .catch(err => {
                toast({
                    title: 'Error',
                    description: err.response.data.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            })
    }
    return (
        <Flex h='100vh' w='100vw' alignItems='center' justifyContent={'center'}>
            <Flex
                direction={'column'} alignItems='center' justifyContent={'center'}
                gap='30px' p='90px 50px'>
                <Image src={otpImage} width={'200px'} />
                <Text fontWeight={'500'} textAlign={'center'}>
                    Please enter the OTP send to your mobile number.
                </Text>
                <Flex justifyContent='space-between' alignItems='center' gap='10px' >
                    <Otp length={6} setotpValue={setotpValue} />
                </Flex>
                <Button
                    background='#301E79' color='white'
                    w='15vw' minW={'150px'} mt='20px'
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Flex>
        </Flex>

    )
}

export default OtpScreen
