import React from 'react';
import Nav from '../components/Nav';
import { ChakraProvider } from '@chakra-ui/react';
const OrderPage =() => {

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
           <h1>Order a delivery online</h1>
           </ChakraProvider>
        </>
    )
}

export default OrderPage