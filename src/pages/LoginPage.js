import React from 'react';
import Nav from '../components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

const LoginPage =() => {

    return (
        <>
        <ChakraProvider>
           <Nav/>
           <div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <h1>Login</h1>
           </div>
           </ChakraProvider>
        </>
    )
}

export default LoginPage