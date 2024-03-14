import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';
import Header from './components/Header';
import Specials from './components/Specials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
<>
<ChakraProvider>
  <Nav/>
  <Header/>
  <Specials/>
  <BookingForm/>
  <Footer/>
</ChakraProvider>

</>
  );
}

export default App;
