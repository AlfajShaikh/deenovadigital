import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from '@material-tailwind/react'
import Header from './components/header/header'
import Banner from './components/Banner/banner'
import LandingPage from './components/LandingPage/landingPage'
import TeamInfo from './components/TeamInfo/teamInfo'
import ServicesProvided from './components/Servicesprovided/servicesProvided'
import Footer from './components/footer/footer'
import ContactInfo from './components/contact/contactInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Header/> */}
 <Banner />
 <LandingPage/>



    </>
  )
}

export default App
