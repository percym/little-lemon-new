import React from 'react';
import Nav from '../components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

const AboutPage =() => {
    return (
        <>
        <ChakraProvider>
            <Nav/>
        <div>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>About Us</h1>
        </div>
        </ChakraProvider>
        
        </>
    )
}

export default AboutPage