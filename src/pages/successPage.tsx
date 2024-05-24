import { Flex, Image, Text } from '@chakra-ui/react'
import successImage from '../assets/success.png'

const SuccessPage = () => {
    return (
        <Flex h='100vh' w='100vw' alignItems='center' justifyContent={'center'} direction={'column'} gap='30px'>
            <Image src={successImage} width='500px' />
            <Text fontSize={'2xl'} color={'#301E79'} fontWeight={'500'}>Otp Verified Succesfully</Text>
        </Flex >
    )
}

export default SuccessPage
