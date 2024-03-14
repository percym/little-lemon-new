import { useState } from "react";
import { VStack, Heading, Box, FormControl, FormLabel, FormErrorMessage, Button, Flex, HStack, Input, Select} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookingForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [event, setEvent] = useState("");
    const [time, setTime] = useState("");

 const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        guests: "",
        time:"",
        
    }, 

    validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        guests: Yup.string().min(1,"There must be at least 1 guest").max(10,"Please call us if you have more than 10 guests").required("Required"),
        event:Yup.string().required("Required"),
        time: Yup.string().required("Required"),
    }),
 });


    return (
        <>
        <Flex
         isDarkBackground
         bg={'#495e57'}
         py={16}
         spacing={8}
         align={'center'}
         justify={'center'}
         >
            <VStack spacing={8} width={800} py={12} px={6} bgColor={'#f4ce14'} rounded={'lg'}>
                <Heading as="h1" id="booking-form" color={'#495e57'}>
                    Reserve a Table
                </Heading>
                <Box p={8} rounded={'lg'} borderWidth={1} boxShadow={'lg'} backgroundColor={'gray.50'}>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={8} fontSize={'lg'}>
                            <HStack>
                                <Box>
                                    <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                        <FormLabel htmlFor="firstName" >First Name</FormLabel>
                                        <Input 
                                        type={'text'} 
                                        id="firstName" 
                                        name="firstName" 
                                        value={firstName}
                                        onChange={e=>setFirstName(e.target.value)}
                                        {...formik.getFieldProps("firstName")}></Input>
                                        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input 
                                        type={'text'} 
                                        id="LastName" 
                                        value={lastName}
                                        onChange={e=>setLastName(e.target.value)}></Input>
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                type="email"  
                                value={email} 
                                placeholder="someone@example.com"
                                onChange={e=>setFirstName(e.target.value)}
                                {...formik.getFieldProps("email")}/>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                                <FormLabel>Number of guests</FormLabel>
                                <Input 
                                type="number" 
                                placeholder="1" 
                                min="1" 
                                max="10" 
                                id="guests" 
                                value={guests}
                                onChange={e=>setGuests(e.target.value)}
                                 {...formik.getFieldProps("guests")} />
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Choose date</FormLabel>
                                <Input type="date" id="res-date" value={bookingDate} onChange={e=>setBookingDate(e.target.value)}/>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Choose time</FormLabel>
                                <Select id='time' name='time' onChange={e=>setTime(e.target.value)}>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                </Select>
                                 <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.event && formik.touched.event}>
                                <FormLabel htmlFor="event">Choose event</FormLabel>
                                <Select id="event" name="event" onChange={e=>{setEvent(e.target.value)}} {...formik.getFieldProps("event")}>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Other">Other</option>
                                </Select>
                                 <FormErrorMessage>{formik.errors.event}</FormErrorMessage>
                            </FormControl>
                            <Button
                             type="submit"
                             bg={'#f4ce14'}
                             color={'#333333'}
                             size={'lg'}
                             _hover={{bg:'yellow.500'}}
                             >
                                Make Your Reservation</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </Flex>
        </>

    );
}

export default BookingForm;