import React from 'react';
import Nav from '../components/Nav';
import { ChakraProvider } from '@chakra-ui/react';

const menu =() => {

    return (
        <>
           <ChakraProvider>     
           <Nav/>
           <div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           </div>
    
           <h1>Menu</h1>
           </ChakraProvider>
        </>
    )
}

export default menu