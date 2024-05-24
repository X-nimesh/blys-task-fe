import { Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface OtpProps {
    length: number;
    setotpValue: (otp: string) => void;
}



const Otp: React.FC<OtpProps> = ({ length, setotpValue }) => {
    const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));
    const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
    // handle backspace
    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && index > -1) {
            inputRef.current[index - 1]?.focus();
            const newPin = [...OTP];
            newPin[index] = '';
            console.log({ newPin, index });
            setOTP(newPin);

        }

    }
    const handleTextChange = (input: string, index: number) => {
        // check if it's number
        console.log({ input, index });
        if (isNaN(parseInt(input))) {
            return;
        }
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        inputRef.current[index + 1]?.focus();
    };
    const handelPaste = (paste: string) => {
        if (paste.length === length) {
            setOTP([...paste.split('')]);
        }
    }
    useEffect(() => {
        setotpValue(OTP.join(''));
    }, [OTP, setotpValue])

    return <>
        {OTP.map((_, index) => (
            <Input
                variant={'filled'}
                key={index}
                background={'#EBEBEB'}
                type="text"
                height={'60px'}
                w='5vw'
                minW={'50px'}
                maxLength={1}
                value={OTP[index]}
                onChange={(e) => handleTextChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
                onPaste={(e) => {
                    handelPaste(e.clipboardData.getData('text'));
                }
                }
            />
        ))}
    </>
};

export default Otp;
